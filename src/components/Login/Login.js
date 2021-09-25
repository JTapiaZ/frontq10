import React, {useState} from 'react';
import { Form, Input, Button } from 'antd';
import Swal from 'sweetalert2';


const Demo = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    async function logn() {
        // await fetch(`${process.env.API_LOGIN}`, {
        await fetch(`https://backintranet.herokuapp.com/api/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then(function (result) {
                if (result['ok'] === true) {
                    result.text().then(function (data) {
                        localStorage.setItem('token', data)
                        const tok = JSON.parse(data)
                        localStorage.setItem('tokenT', tok.token)
                        console.log(tok.token);
                        Swal.fire({
                            title: "Bienvenido!",
                            text: "Redireccionando en 2 segundos.",
                            timer: 2000,
                            showConfirmButton: false,
                            icon: 'success'
                        }).then((result) => {
                            if (result) {
                                window.location.href = "/";
                            }
                        });
                    })

                } else {
                    result.text().then(function (data) {
                        Swal.fire({
                            icon: 'error',
                            title: '¡ERROR!',
                            text: data,
                            timer: 3500
                        })
                    })
                }
            }).catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                    timer: 3500
                })
            });
    }

  return (
    <Form
      style={{textAlign:'center', marginRight:'20%'}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        value={email}
        onChange={handleEmailChange}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={logn}>
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo