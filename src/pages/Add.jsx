import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTableData } from "../redux/actions/tableDataActions";

const Add = () => {
  const dispatch = useDispatch()
  const tableDataa = useSelector((state) => state.tableData);
  const { data, loading, error } = tableDataa;
  const navigation = useNavigate();
  let schema = yup.object({
    name: yup.string().trim().required(),
    websiteUrl: yup.string().trim().required(),
    country: yup.string().trim().required(),
  });
  const { values, handleSubmit, handleChange, setFieldValue, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        websiteUrl: "",
        country: "",
      },
      validationSchema: schema,

      onSubmit: (values) => {
        const updatedData = [values, ...data]
        dispatch(updateTableData(updatedData));
        navigation("/");
      },
    });


  return (
    <form
      className="p-4 border"
      style={{ minWidth: "350px", maxWidth: "500px" }}
    >
      <h3 className="flex justify-center text-slate-500">Add</h3>
      <div className="my-2 w-full">
        <input
          name="name"
          placeholder="Name"
          type="text"
          class="w-full p-2 border rounded-md text-base text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          value={values.name}
          onChange={handleChange("name")}
        />
        {errors.name && touched.name ? <div className="text-xs text-red-700 mx-1">Name is redquired</div> : null}
      </div>
      <div className="mb-2 w-full ">
        <input
          name="website url"
          placeholder="Website url"
          type="text"
          class="w-full p-2 border rounded-md text-base text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          value={values.websiteUrl}
          onChange={handleChange("websiteUrl")}
        />
        {errors.websiteUrl && touched.websiteUrl ? <div className="text-xs text-red-700 mx-1">Website url is redquired</div> : null}
      </div>
      <div className="mb-2 w-full">
        <input
          name="country"
          placeholder="country"
          type="text"
          class="w-full p-2 border rounded-md text-base text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          value={values.country}
          onChange={handleChange("country")}
        />
        {errors.country && touched.country ? <div className="text-xs text-red-700 mx-1">country is redquired</div> : null}
      </div>
      <div className="w-full border mt-6">
        <button
          className="w-full py-2 bg-cyan-600 rounded-sm text-slate-100 focus:bg-cyan-800 "
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Add;
