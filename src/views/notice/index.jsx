import React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { NoticeContext } from "@/Backend/Context/NoticeContext";
import Modal from "@/compos/modal";
import { Trash } from "react-feather";
import { PlusCircle } from "react-feather";

function Notice() {
  const { fetchActive, activeNotices, notices, addNotice, loading } =
    useContext(NoticeContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("");
  const [active, setActive] = useState(false);

  const newNotice = {
    title: title,
    body: body,
    type: type,
    isActive: active,
  };

  const saveNotices = () => {
    if (title != "" || type != "" || body != "") {
      addNotice(newNotice);
      console.log("Successfully saved");
      clearFields()
      setOpen(false);
      fetchActive()
    } else {
      console.log("Fill all the required spaces");
    }
  };

  function handleTest() {
    console.log(
      `Title: ${title}\nBody: ${body}\nType: ${type} \nActive: ${active}`
    );
  }

  function clearFields(){
    setBody("");
    setTitle("");
    setType("");
    setActive(false);
  }
  useEffect(() => {
    fetchActive();
    console.log(activeNotices);
   
  }, []);
  return (
    <div className="mt-28 ml-72 mr-36 p-10 h-screen mb-5 gap-5 ">
      <div className="flex justify-between mb-3">
        <div>
          <Select>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="p-3 bg-violet-800 text-cyan-50 w-[180px] rounded font-semibold text-lg"
        >
          Add
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-96 items-center justify-center">
            <PlusCircle size={56} className="mx-auto text-red-500" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">
                Add New Notice!
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 ">
              <input
                type="text"
                placeholder="Enter title"
                className="p-3 w-80 border border-gray-500 pb-2 rounded"
                name="activate"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Select Type"
                className="p-3 w-80 border border-gray-500 pb-2 rounded"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <input
                type="text"
                placeholder="Body"
                className="p-3 w-80 border border-gray-500 pb-2 rounded"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
              <div className="flex w-80 justify-start space-x-2">
                <label>Activate : </label>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 items-center justify-center rounded"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                />
              </div>
            </div>
            <div className="flex justify-around mt-3 gap-3  text-cyan-50 font-semibold  ">
              <button
                onClick={()=> saveNotices()}
                className="btn btn-danger w-1/4 rounded p-3 bg-violet-700"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <div className="flex flex-wrap gap-2">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          activeNotices.map((notice, index) => (
            
            <div key={index} className="flex  ">
              <Card className="h-72 w-60 text-center flex flex-col ">
                <CardHeader className="pb-3">
                  <CardTitle>{notice.title}</CardTitle>
                  <CardDescription>{notice.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-clip">
                  <p>{notice.body}</p>
                </CardContent>
                <CardFooter className="mt-5">
                  <div className="flex justify-between w-screen ">
                    <Button className="p-5 bg-blue-700 text-white rounded">
                      Edit
                    </Button>
                    <Button className="p-5 bg-red-500 text-white rounded">
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notice;
