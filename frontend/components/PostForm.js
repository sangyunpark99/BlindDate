import { Form, Input, Button } from "antd";
import { useState, useCallback } from "react";

const PostForm = () => {
  const [text, setText] = useState("");

  const onSubmit = useCallback((e) => {});

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  });

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }}>
          짹짹
        </Button>
      </div>
    </Form>
  );
};

export default PostForm;
