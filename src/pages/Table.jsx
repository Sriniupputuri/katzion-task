import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableData } from "../redux/actions/tableDataActions";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../components/MyContext";

const Table = () => {
  const { mainData, setMainData } = useContext(MyContext);
  // console.log("mainData", mainData);
  const navigation = useNavigate();
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const tableDataa = useSelector((state) => state.tableData);
  let { data, loading, error } = tableDataa;
  // console.log("data", data)

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data?.filter((item) => {
    let dd = item?.name?.toLowerCase().includes(filter?.toLowerCase());
    return dd;
  });

  data = data?.map((i, ind) => ({ ...i, id: ind }))

  // console.log(data)

  // useEffect(() => {
  //   dispatch(tableData());
  // }, [dispatch]);

  // useEffect(() =>{
  //   setMainData(data)
  // },[data])

  const handleClick = () => {
    dispatch(tableData());
  };

  // console.log(data)

  return (
    <div>
      <button
        className="bg-cyan-800 px-6 py-2 rounded-sm text-white"
        onClick={handleClick}
      >
        Hit API
      </button>
      <div
        className="my-4 flex justify-between w-full"
        style={{ width: "950px" }}
      >
        <input
          placeholder="Filter"
          type="text"
          class="w-48 p-2 border rounded-md text-base text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          value={filter}
          onChange={handleFilterChange}
        />
        <button
          className="bg-cyan-800 px-6 rounded-sm text-white"
          onClick={(e) => {
            navigation("add");
          }}
        >
          Add
        </button>
      </div>
      <div class="p-4 border flex justify-center">
        <div class="max-h-96 overflow-y-auto">
          <table
            style={{ width: "900px" }}
            class="min-w-full divide-y divide-gray-200"
          >
            <thead>
              <tr>
                <th
                  style={{ width: "33%" }}
                  class="w-1/3 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  style={{ width: "33%" }}
                  class="w-1/3 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider"
                >
                  Website
                </th>
                <th
                  style={{ width: "33%" }}
                  class="w-1/3 px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider"
                >
                  Country
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {data != undefined && filter == ""
                ? data.map((i, index) => {
                  // console.log(index)
                    return (
                      <tr
                        key={index}
                        onClick={() => {
                          console.log(index)
                          navigation("/edit", { state: i });
                        }}
                      >
                        <td class="min-w-20 px-6 py-4 whitespace-no-wrap">
                          {i.name}
                        </td>
                        <td class="min-w-20 px-6 py-4 whitespace-no-wrap">
                          {i.websiteUrl ? i.websiteUrl : i?.domains[0]}
                        </td>
                        <td class="min-w-20 px-6 py-4 whitespace-no-wrap">
                          {i.country}
                        </td>
                      </tr>
                    );
                  })
                : null}
              {filter != ""
                ? filteredData.map((i, index) => {
                    return (
                      <tr
                        key={index}
                        onClick={() => {
                          navigation("/edit", { state: index });
                        }}
                      >
                        <td class="px-6 py-4 whitespace-no-wrap">{i.name}</td>
                        <td class="px-6 py-4 whitespace-no-wrap">
                          {i.websiteUrl ? i.websiteUrl : i?.domains[0]}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap">
                          {i.country}
                        </td>
                      </tr>
                    );
                  })
                : null}
              {/* <tr>
              <td class="px-6 py-4 whitespace-no-wrap">Jane Smith</td>
              <td class="px-6 py-4 whitespace-no-wrap">25</td>
              <td class="px-6 py-4 whitespace-no-wrap">jane@example.com</td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
