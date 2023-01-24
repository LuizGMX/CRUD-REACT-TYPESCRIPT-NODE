import React, { useRef, useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Button, Input, Space, Table, Tag } from "antd";
import type { ColumnsType, ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import {
  DeleteTwoTone,
  EditTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  type: string[];
  CPF?: string;
  qtdeDependentes?: number;
  cpfsDependentes?: string[];
  expirationDate?: string;
  active: boolean;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "Luiz Gustavo",
    age: 32,
    address: "QSC 02",
    type: ["Títular"],
    CPF: "02765555482",
    qtdeDependentes: 1,
    cpfsDependentes: ["03829382932"],
    expirationDate: "20/10/2004",
    active: true,
  },
  {
    key: "2",
    name: "Bruna",
    age: 42,
    address: "São Sebastião",
    type: ["Dependente"],
    active: false,
  },
  {
    key: "3",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "4",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "5",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "6",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "7",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "8",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "9",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "10",
    name: "Maria",
    age: 32,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "11",
    name: "Maria",
    age: 85,
    address: "Taguatinga",
    type: ["Títular"],
    active: true,
  },
  {
    key: "12",
    name: "Maria",
    age: 85,
    address: "OPA",
    type: ["Títular"],
    active: true,
  },
];

const App: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  function handleEditClick() {
    alert("Editar");
  }

  function handleDeleteClick() {
    alert("Deletar");
  }

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Procurar po ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]!.toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Editar",
      dataIndex: "edit",
      key: "edit",
      render: () => <EditTwoTone onClick={handleEditClick} />,
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "CPF",
      dataIndex: "CPF",
      key: "CPF",
      ...getColumnSearchProps("CPF"),
    },
    {
      title: "Idade",
      dataIndex: "age",
      key: "age",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Endereço",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tipo",
      key: "type",
      dataIndex: "type",
      ...getColumnSearchProps("type"),
      render: (_, { type }) => (
        <>
          {type.map((type) => {
            let color = type === "Títular" ? "green" : "blue";
            return (
              <Tag color={color} key={type}>
                {type.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Qtd. Dep.",
      dataIndex: "qtdeDependentes",
      key: "qtdeDependentes",
      ...getColumnSearchProps("qtdeDependentes"),
    },
    {
      title: "CPF(s) Dep(s).",
      dataIndex: "cpfsDependentes",
      key: "cpfsDependentes",
      ...getColumnSearchProps("cpfsDependentes"),
    },
    {
      title: "Validade",
      dataIndex: "expirationDate",
      key: "expirationDate",
      ...getColumnSearchProps("expirationDate"),
    },
    {
      title: "Ativo",
      dataIndex: "active",
      key: "active",
      ...getColumnSearchProps("active"),
      render: (data) => (
        <CheckCircleTwoTone twoToneColor={data === true ? "#52c41a" : "red"} />
      ),
    },
    {
      title: "Deletar",
      key: "delete",
      dataIndex: "delete",
      render: () => (
        <DeleteTwoTone twoToneColor={"red"} onClick={handleDeleteClick} />
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default App;
