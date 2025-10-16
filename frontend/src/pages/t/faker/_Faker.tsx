import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import FakerSkeleton from "./_FakerSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2Icon, PlusIcon } from "lucide-react";
import AdBanner from "../../../components/banner/AdBanner";

// Simplified faker implementation (in a real project, you'd use @faker-js/faker)
const createFakeData = (category: string, dataType: string): any => {
  const generators: Record<string, Record<string, () => any>> = {
    person: {
      firstName: () =>
        ["John", "Jane", "Michael", "Sarah", "David", "Emma"][
        Math.floor(Math.random() * 6)
        ],
      lastName: () =>
        ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"][
        Math.floor(Math.random() * 6)
        ],
      fullName: () =>
        `${createFakeData("person", "firstName")} ${createFakeData("person", "lastName")}`,
      email: () =>
        `${createFakeData("person", "firstName").toLowerCase()}@example.com`,
      phone: () => `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    },
    address: {
      street: () =>
        ["123 Main St", "456 Oak Ave", "789 Pine Rd", "321 Elm Dr"][
        Math.floor(Math.random() * 4)
        ],
      city: () =>
        ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"][
        Math.floor(Math.random() * 5)
        ],
      state: () =>
        ["NY", "CA", "IL", "TX", "AZ"][Math.floor(Math.random() * 5)],
      zipCode: () => Math.floor(Math.random() * 90000) + 10000,
      country: () =>
        ["USA", "Canada", "UK", "Australia", "Germany"][
        Math.floor(Math.random() * 5)
        ],
    },
    company: {
      name: () =>
        [
          "Acme Corp",
          "Tech Solutions",
          "Global Industries",
          "Innovative Systems",
        ][Math.floor(Math.random() * 4)],
      department: () =>
        ["Engineering", "Marketing", "Sales", "HR", "Finance"][
        Math.floor(Math.random() * 5)
        ],
      jobTitle: () =>
        ["Developer", "Manager", "Analyst", "Coordinator", "Specialist"][
        Math.floor(Math.random() * 5)
        ],
    },
    datatype: {
      uuid: () =>
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }),
      number: () => Math.floor(Math.random() * 1000),
      boolean: () => Math.random() > 0.5,
      date: () =>
        new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
      url: () => `https://example${Math.floor(Math.random() * 10)}.com`,
    },
    lorem: {
      word: () =>
        ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur"][
        Math.floor(Math.random() * 6)
        ],
      sentence: () =>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      paragraph: () =>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  };

  if (generators[category] && generators[category][dataType]) {
    return generators[category][dataType]();
  }
  return "Unknown";
};

interface Field {
  id: string;
  fieldName: string;
  category: string;
  dataType: string;
}

const outputFormats = [
  { value: "json", label: "JSON" },
  { value: "csv", label: "CSV" },
  { value: "sql", label: "SQL" },
  { value: "yaml", label: "YAML" },
];

const dataCategories = [
  { value: "person", label: "Person" },
  { value: "address", label: "Address" },
  { value: "company", label: "Company" },
  { value: "datatype", label: "Data Type" },
  { value: "lorem", label: "Lorem Ipsum" },
];

const dataTypes: Record<string, { value: string; label: string }[]> = {
  person: [
    { value: "firstName", label: "First Name" },
    { value: "lastName", label: "Last Name" },
    { value: "fullName", label: "Full Name" },
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
  ],
  address: [
    { value: "street", label: "Street" },
    { value: "city", label: "City" },
    { value: "state", label: "State" },
    { value: "zipCode", label: "Zip Code" },
    { value: "country", label: "Country" },
  ],
  company: [
    { value: "name", label: "Company Name" },
    { value: "department", label: "Department" },
    { value: "jobTitle", label: "Job Title" },
  ],
  datatype: [
    { value: "uuid", label: "UUID" },
    { value: "number", label: "Number" },
    { value: "boolean", label: "Boolean" },
    { value: "date", label: "Date" },
    { value: "url", label: "URL" },
  ],
  lorem: [
    { value: "word", label: "Word" },
    { value: "sentence", label: "Sentence" },
    { value: "paragraph", label: "Paragraph" },
  ],
};

const Faker: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([
    { id: "1", fieldName: "id", category: "datatype", dataType: "uuid" },
    { id: "2", fieldName: "name", category: "person", dataType: "fullName" },
    { id: "3", fieldName: "email", category: "person", dataType: "email" },
  ]);
  const [outputFormat, setOutputFormat] = useState("json");
  const [rowCount, setRowCount] = useState(10);
  const [tableName, setTableName] = useState("users");
  const [csvDelimiter, setCsvDelimiter] = useState(",");
  const [output, setOutput] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const addField = () => {
    const newField: Field = {
      id: Date.now().toString(),
      fieldName: "",
      category: "person",
      dataType: "firstName",
    };
    setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<Field>) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  const validateFields = (): { valid: boolean; message?: string } => {
    if (fields.length === 0) {
      return { valid: false, message: "Add at least one field." };
    }

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (!field.fieldName.trim()) {
        return {
          valid: false,
          message: `Field ${i + 1} is missing a field name.`,
        };
      }
      if (!field.category) {
        return {
          valid: false,
          message: `Field ${i + 1} is missing a category.`,
        };
      }
      if (!field.dataType) {
        return {
          valid: false,
          message: `Field ${i + 1} is missing a data type.`,
        };
      }
    }

    return { valid: true };
  };

  const generateObject = (): Record<string, any> => {
    const obj: Record<string, any> = {};
    fields.forEach((field) => {
      obj[field.fieldName] = createFakeData(field.category, field.dataType);
    });
    return obj;
  };

  const generateData = useCallback(() => {
    const validation = validateFields();
    if (!validation.valid) {
      toast.error(validation.message || "Validation failed");
      return;
    }

    try {
      let result = "";

      if (outputFormat === "json") {
        const data = Array.from({ length: rowCount }, () => generateObject());
        result = JSON.stringify(data, null, 2);
      } else if (outputFormat === "csv") {
        const headers = fields.map((f) => f.fieldName).join(csvDelimiter);
        const rows = Array.from({ length: rowCount }, () => {
          return fields
            .map((field) => {
              const value = createFakeData(field.category, field.dataType);
              const stringValue = String(value);
              return stringValue.includes(csvDelimiter)
                ? `"${stringValue}"`
                : stringValue;
            })
            .join(csvDelimiter);
        });
        result = [headers, ...rows].join("\n");
      } else if (outputFormat === "sql") {
        const columns = fields.map((f) => f.fieldName).join(", ");
        const inserts = Array.from({ length: rowCount }, () => {
          const values = fields
            .map((field) => {
              const value = createFakeData(field.category, field.dataType);
              return typeof value === "string" ? `'${value}'` : value;
            })
            .join(", ");
          return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
        });
        result = inserts.join("\n");
      } else if (outputFormat === "yaml") {
        const data = Array.from({ length: rowCount }, () => generateObject());
        // Simple YAML conversion (in a real project, use js-yaml library)
        result = data
          .map((item, index) => {
            const yamlItem = Object.entries(item)
              .map(
                ([key, value]) =>
                  `  ${key}: ${typeof value === "string" ? `"${value}"` : value}`
              )
              .join("\n");
            return `- \n${yamlItem}`;
          })
          .join("\n");
      }

      setOutput(result);
      toast.success(
        `Generated ${rowCount} rows of ${outputFormat.toUpperCase()} data!`
      );
    } catch (error) {
      toast.error("Failed to generate data");
      console.error("Generation error:", error);
    }
  }, [fields, outputFormat, rowCount, tableName, csvDelimiter]);

  const handleClear = () => {
    setOutput("");
  };

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="Fake Data Generator"
        description="Generate realistic fake data instantly with our free online fake data generator. Create mock JSON, CSV, SQL data with customizable fields for testing, development, and prototyping."
      />

      {!loaded ? (
        <FakerSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>Fake Data Generator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Configuration Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Row Count</Label>
                    <Input
                      type="number"
                      min="1"
                      max="1000"
                      value={rowCount}
                      onChange={(e) => setRowCount(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Output Format</Label>
                    <Select
                      value={outputFormat}
                      onValueChange={setOutputFormat}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {outputFormats.map((format) => (
                          <SelectItem key={format.value} value={format.value}>
                            {format.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {outputFormat === "sql" && (
                    <div className="space-y-2">
                      <Label>Table Name</Label>
                      <Input
                        value={tableName}
                        onChange={(e) => setTableName(e.target.value)}
                        placeholder="table_name"
                      />
                    </div>
                  )}

                  {outputFormat === "csv" && (
                    <div className="space-y-2">
                      <Label>CSV Delimiter</Label>
                      <Input
                        value={csvDelimiter}
                        onChange={(e) => setCsvDelimiter(e.target.value)}
                        placeholder=","
                        maxLength={1}
                      />
                    </div>
                  )}
                </div>

                {/* Fields Configuration */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="font-medium">
                      Data Fields ({fields.length})
                    </Label>
                    <Button onClick={addField} size="sm">
                      <PlusIcon className="h-4 w-4 mr-1" />
                      Add Field
                    </Button>
                  </div>

                  <ScrollArea className="h-[300px] w-full">
                    <div className="space-y-3 pr-4">
                      {fields.map((field, index) => (
                        <div
                          key={field.id}
                          className="flex items-center gap-3 p-3 border rounded-lg bg-muted/30"
                        >
                          <span className="text-sm font-mono w-6 text-center">
                            {index + 1}
                          </span>

                          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="space-y-1">
                              <Label className="text-xs">Field Name</Label>
                              <Input
                                value={field.fieldName}
                                onChange={(e) =>
                                  updateField(field.id, {
                                    fieldName: e.target.value,
                                  })
                                }
                                placeholder="field_name"
                                size="sm"
                              />
                            </div>

                            <div className="space-y-1">
                              <Label className="text-xs">Category</Label>
                              <Select
                                value={field.category}
                                onValueChange={(value) => {
                                  const firstType =
                                    dataTypes[value]?.[0]?.value || "";
                                  updateField(field.id, {
                                    category: value,
                                    dataType: firstType,
                                  });
                                }}
                              >
                                <SelectTrigger size="sm">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {dataCategories.map((category) => (
                                    <SelectItem
                                      key={category.value}
                                      value={category.value}
                                    >
                                      {category.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-1">
                              <Label className="text-xs">Data Type</Label>
                              <Select
                                value={field.dataType}
                                onValueChange={(value) =>
                                  updateField(field.id, { dataType: value })
                                }
                              >
                                <SelectTrigger size="sm">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {(dataTypes[field.category] || []).map(
                                    (type) => (
                                      <SelectItem
                                        key={type.value}
                                        value={type.value}
                                      >
                                        {type.label}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <Button
                            onClick={() => removeField(field.id)}
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                          >
                            <Trash2Icon className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <Button onClick={handleClear} variant="outline">
                    Clear Output
                  </Button>
                  <Button onClick={generateData}>Generate Data</Button>
                </div>

                {/* Output Section */}
                {output && (
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <Label className="font-medium">Generated Data</Label>
                      <CopyButton text={output} />
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      className="min-h-[200px] font-mono text-sm bg-muted/50"
                      placeholder="Generated data will appear here..."
                    />

                    {/* Data Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-muted/30 p-3 rounded">
                      <div>
                        <span className="text-muted-foreground">Format:</span>
                        <span className="ml-2 font-mono font-medium">
                          {outputFormat.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Rows:</span>
                        <span className="ml-2 font-mono font-medium">
                          {rowCount}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Size:</span>
                        <span className="ml-2 font-mono font-medium">
                          {output.length} chars
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Fake Data Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Fake data generation is essential for software development,
                    testing, and prototyping. Our tool creates realistic mock
                    data that mimics real-world information without exposing
                    sensitive data.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Supported Data Categories
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Person:</strong> Names, emails, phone
                            numbers
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Address:</strong> Streets, cities, states,
                            zip codes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Company:</strong> Names, departments, job
                            titles
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Data Types:</strong> UUIDs, numbers,
                            booleans, dates
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Lorem Ipsum:</strong> Words, sentences,
                            paragraphs
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Output Formats
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>JSON:</strong> Perfect for APIs and web
                            applications
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>CSV:</strong> Ideal for spreadsheets and
                            data analysis
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>SQL:</strong> Ready-to-use INSERT statements
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>YAML:</strong> Configuration files and
                            documentation
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Example Generated Data
                    </h5>
                    <div className="bg-slate-800 dark:bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
                      <div className="text-slate-300">
                        {`[
  {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "John Smith",
    "email": "john@example.com",
    "company": "Tech Solutions"
  }
]`}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Use Cases and Best Practices for Fake Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🎯
                          </span>
                        </span>
                        Common Use Cases
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Testing:</strong> Create realistic test
                            data for endpoint validation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Database Seeding:</strong> Populate
                            development databases
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>UI Prototyping:</strong> Fill mockups with
                            realistic content
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Load Testing:</strong> Generate large
                            datasets for performance testing
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Best Practices */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ✨
                          </span>
                        </span>
                        Best Practices
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Privacy:</strong> Never use real
                            personal information
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Realistic Patterns:</strong> Maintain data
                            relationships and constraints
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Volume Testing:</strong> Generate
                            appropriate data volumes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Environment Separation:</strong> Keep fake
                            data out of production
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Development Benefits */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🚀
                          </span>
                        </span>
                        Development Benefits
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Faster Development:</strong> No waiting for
                            real data
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Consistent Testing:</strong> Reproducible
                            test scenarios
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Edge Case Testing:</strong> Create specific
                            test scenarios
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Team Collaboration:</strong> Shared
                            realistic datasets
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Data Formats */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            📊
                          </span>
                        </span>
                        Format Selection Guide
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>JSON:</strong> Web APIs, NoSQL databases,
                            JavaScript applications
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>CSV:</strong> Excel, data analysis, bulk
                            imports
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>SQL:</strong> Database seeding, migration
                            scripts
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>YAML:</strong> Configuration files,
                            documentation
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When generating fake data for
                      testing, consider using consistent seeds to ensure
                      reproducible test results. This helps maintain reliable
                      automated testing and makes debugging easier when issues
                      arise with specific data patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default Faker;
