package db_config

// CPU Architecture
// ubuntu@nats03-do:~$ lscpu
// Architecture:             x86_64
//   CPU op-mode(s):         32-bit, 64-bit
//   Address sizes:          40 bits physical, 48 bits virtual
//   Byte Order:             Little Endian
// CPU(s):                   2
//   On-line CPU(s) list:    0,1
// Vendor ID:                GenuineIntel
//   Model name:             DO-Regular
//     CPU family:           6
//     Model:                79
//     Thread(s) per core:   1
//     Core(s) per socket:   2
//     Socket(s):            1
//     Stepping:             1
//     BogoMIPS:             4589.21
//     Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr ss
//                           e sse2 ss ht syscall nx rdtscp lm constant_tsc rep_good nopl xtopology cpuid tsc_known_freq
//                            pni pclmulqdq vmx ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer
//                            aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch cpuid_fault pti ssbd ibrs i
//                           bpb tpr_shadow flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms in
//                           vpcid rdseed adx smap xsaveopt arat vnmi md_clear
// Virtualization features:
//   Virtualization:         VT-x
//   Hypervisor vendor:      KVM
//   Virtualization type:    full
// Caches (sum of all):
//   L1d:                    64 KiB (2 instances)
//   L1i:                    64 KiB (2 instances)
//   L2:                     8 MiB (2 instances)
// NUMA:
//   NUMA node(s):           1
//   NUMA node0 CPU(s):      0,1
// Vulnerabilities:
//   Gather data sampling:   Not affected
//   Itlb multihit:          KVM: Mitigation: VMX disabled
//   L1tf:                   Mitigation; PTE Inversion; VMX conditional cache flushes, SMT disabled
//   Mds:                    Mitigation; Clear CPU buffers; SMT Host state unknown
//   Meltdown:               Mitigation; PTI
//   Mmio stale data:        Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
//   Reg file data sampling: Not affected
//   Retbleed:               Not affected
//   Spec rstack overflow:   Not affected
//   Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
//   Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
//   Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS
//                            Not affected; BHI Retpoline
//   Srbds:                  Not affected
//   Tsx async abort:        Not affected
//   Vmscape:                Not affected

// RAM and SWAP
// ubuntu@nats03-do:~$ free -h
//                total        used        free      shared  buff/cache   available
// Mem:           3.8Gi       740Mi       2.4Gi       3.1Mi       1.0Gi       3.1Gi
// Swap:           11Gi       2.2Gi       9.8Gi

// 2.48GB man-pages-db-v4.db
// Optimized for 2.48GB database: 1GB cache, 2.6GB mmap (covers full DB + overhead)
var ManPagesDBConfig = "?mode=ro" +
	"&_immutable=1" +
	"&_cache_size=-1048576" +
	"&_mmap_size=2726297600"

// 479M svg-icons-db-v4.db
var SVGIconsDBConfig = "?mode=ro" +
	"&_immutable=1" +
	"&_cache_size=-32768" +
	"&_mmap_size=536870912"

// 465M png-icons-db-v4.db
var PngIconsDBConfig = "?mode=ro" +
	"&_immutable=1" +
	"&_cache_size=-32768" +
	"&_mmap_size=536870912"

// 36K banner-db.db
// 7.5M cheatsheets-db-v4.db
// 2.3G emoji-db-v4.db
// Optimize for RAM: mmap_size covers full DB, large cache for hot pages
// Match man-pages pattern: 1GB cache, 2.5GB mmap (covers full 2.3GB DB + overhead)
var EmojiDBConfig = "?mode=ro" +
	"&_immutable=1" +
	"&_cache_size=-1048576" + // 1GB cache (negative = KB, so -1048576 = 1GB)
	"&_mmap_size=2684354560" + // 2.5GB mmap (covers full 2.3GB DB + overhead)
	"&_busy_timeout=5000" // 5s timeout for concurrent access

// 388K ipm-db-v4.db
// 157M mcp-db-v5.db
var McpDBConfig = "?mode=ro" +
	"&_immutable=1" +
	"&_cache_size=-32768" +
	"&_mmap_size=536870912"

// 7.5M cheatsheets-db-v4.db
var CheatsheetsDBConfig = "?mode=ro" +
	"&_immutable=1" +
	"&_cache_size=-2000" + // 2MB cache
	"&_mmap_size=16777216" // 16MB mmap

	// 465M png-icons-db-v4.db
// 31M  tldr-db-v4.db
var TldrDBConfig = "?mode=ro" +
	"&_immutable=1" +
	"&_cache_size=-4000" + // 4MB cache
	"&_mmap_size=67108864" // 64MB mmap
