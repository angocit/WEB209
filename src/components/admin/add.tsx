import { Button, Form, FormProps, Input } from "antd";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MediaManager from "../media/media";
type FieldType = {
  name?: string;
  image?: string;
  content?: string;
};
const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
const Add = () => {
  const [value, setValue] = useState("");
  const [close,setClose] = useState<boolean>(false)
  const [url,setUrl] = useState<string>("")
  const quillRef = useRef(null);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
       console.log(values);       
  };
  const ValidateMesss = {
    required: "${label} không để trống!",
  };
  const InsertMedia = (url:string)=>{
      const quill:any =  quillRef.current
      if (quill){
          const position = quill.editor.getSelection().index??0;
          // console.log(position);   
          // console.log(url);
          quill.editor.insertEmbed(position, 'image', url);                 
      }    
  }
  return (
    <>
      <h1 className="text-center text-2xl">Thêm mới</h1>
      <Form
        onFinish={onFinish}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        validateMessages={ValidateMesss}
      >
        <Form.Item<FieldType>
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Ảnh"
          name="image"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <button onClick={()=>setClose(true)}>Thêm media</button>
        <Form.Item<FieldType>
          label="content"
          name="content"
        >
          <ReactQuill
            className="h-40 mb-10"
            ref={quillRef}
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
          />
        </Form.Item>
        <Form.Item name="content" hidden>
          <Input type="hidden" value={value} />
        </Form.Item>
        <Form.Item className="flex justify-end mt-20">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {(close)&&<MediaManager setUrl={InsertMedia} setClose={setClose}/>}
    </>
  );
};

export default Add;
