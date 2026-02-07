package core

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"

	"b2m/config"
	"b2m/model"

	"github.com/jedib0t/go-pretty/v6/table"
)

func sortDBs(dbs []model.DBInfo) {
	re := regexp.MustCompile(`^(.*)-v(\d+)(\..*)?$`)
	sort.Slice(dbs, func(i, j int) bool {
		name1 := dbs[i].Name
		name2 := dbs[j].Name
		match1 := re.FindStringSubmatch(name1)
		match2 := re.FindStringSubmatch(name2)
		if match1 != nil && match2 != nil {
			base1 := match1[1]
			base2 := match2[1]
			if base1 != base2 {
				return base1 < base2
			}
			v1, err1 := strconv.Atoi(match1[2])
			v2, err2 := strconv.Atoi(match2[2])
			if err1 != nil {
				v1 = 0
			}
			if err2 != nil {
				v2 = 0
			}
			return v1 > v2 // Descending version
		}
		return name1 < name2
	})
}

// AggregateDBs combines local and remote DB lists into a unified list of DBInfo structures
func AggregateDBs(local []string, remote []string) ([]model.DBInfo, error) {
	dbMap := make(map[string]*model.DBInfo)
	for _, name := range local {
		if _, ok := dbMap[name]; !ok {
			dbMap[name] = &model.DBInfo{Name: name}
		}
		dbMap[name].ExistsLocal = true

		// Get local file stats
		info, err := os.Stat(filepath.Join(config.AppConfig.LocalDBDir, name))
		if err == nil {
			dbMap[name].ModifiedAt = info.ModTime()
			dbMap[name].CreatedAt = info.ModTime()
		}
	}
	for _, name := range remote {
		if _, ok := dbMap[name]; !ok {
			dbMap[name] = &model.DBInfo{Name: name}
		}
		dbMap[name].ExistsRemote = true
	}
	var all []model.DBInfo
	for _, info := range dbMap {
		all = append(all, *info)
	}
	sortDBs(all)
	return all, nil
}

func renderHeader() {
	t := table.NewWriter()
	t.SetOutputMirror(os.Stdout)
	t.SetStyle(table.StyleRounded)
	t.AppendRow(table.Row{"b2m - Interactive DB Control Plane"})
	t.AppendRow(table.Row{fmt.Sprintf("v1.0 | %s@%s", config.AppConfig.CurrentUser, config.AppConfig.Hostname)})
	t.Render()
}
