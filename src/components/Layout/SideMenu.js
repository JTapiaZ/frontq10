import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  // DashboardOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo"><img alt="logo" style={{width:'100%'}} src={require('../../Assets/Images/logo.png')} /></div><br/>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/administrativos">
          <HomeOutlined />
          <span>Administrativos</span>
          <Link to="/administrativos"></Link>
        </Menu.Item>

        <Menu.Item key="/cursos">
          <TeamOutlined />
          <span>Cursos</span>
          <Link to="/cursos"></Link>
        </Menu.Item>
        
        <Menu.Item key="/disenocurricularasignaturas">
          <TeamOutlined />
          <span>Diseño Curricular Asignaturas</span>
          <Link to="/disenocurricularasignaturas"></Link>
        </Menu.Item>
        
        <Menu.Item key="/disenocurricularmodulos">
          <TeamOutlined />
          <span>Diseño Curricular Modulos</span>
          <Link to="/disenocurricularmodulos"></Link>
        </Menu.Item>
        
        <Menu.Item key="/creditos">
          <TeamOutlined />
          <span>Creditos</span>
          <Link to="/creditos"></Link>
        </Menu.Item>
        
        <Menu.Item key="/docentes">
          <TeamOutlined />
          <span>Docentes</span>
          <Link to="/docentes"></Link>
        </Menu.Item>
        
        <Menu.Item key="/estudiantes">
          <TeamOutlined />
          <span>Estudiantes</span>
          <Link to="/estudiantes"></Link>
        </Menu.Item>
        
        <Menu.Item key="/evaluacionescuantitativas1">
          <TeamOutlined />
          <span>Evaluaciones Cuantitativas 1</span>
          <Link to="/evaluacionescuantitativas1"></Link>
        </Menu.Item>
        
        <Menu.Item key="/evaluacionescuantitativas2">
          <TeamOutlined />
          <span>Evaluaciones Cuantitativas 2</span>
          <Link to="/evaluacionescuantitativas2"></Link>
        </Menu.Item>
        
        <Menu.Item key="/homologacionesHabilitacionesCuantitativas">
          <TeamOutlined />
          <span>Homologaciones Habilitaciones Cuantitativas</span>
          <Link to="/homologacionesHabilitacionesCuantitativas"></Link>
        </Menu.Item>
        
        <Menu.Item key="/matriculasestudiantes">
          <TeamOutlined />
          <span>Matriculas Estudiantes</span>
          <Link to="/matriculasestudiantes"></Link>
        </Menu.Item>
        
        <Menu.Item key="/notasCredito">
          <TeamOutlined />
          <span>Notas Credito</span>
          <Link to="/notasCredito"></Link>
        </Menu.Item>
        
        <Menu.Item key="/notasCreditoRelacionesPagosRegulares">
          <TeamOutlined />
          <span>Notas Credito Relaciones Pagos Regulares</span>
          <Link to="/notasCreditoRelacionesPagosRegulares"></Link>
        </Menu.Item>
        
        <Menu.Item key="/pagosCredito">
          <TeamOutlined />
          <span>Pagos Credito</span>
          <Link to="/pagosCredito"></Link>
        </Menu.Item>
        
        
        <Menu.Item key="/pagosPendientes">
          <TeamOutlined />
          <span>Pagos Pendientes</span>
          <Link to="/pagosPendientes"></Link>
        </Menu.Item>
        
        <Menu.Item key="/pagosRealizados">
          <TeamOutlined />
          <span>Pagos Realizados</span>
          <Link to="/pagosRealizados"></Link>
        </Menu.Item>
        
        <Menu.Item onClick={() => localStorage.removeItem('token')} key="/login">
          <TeamOutlined />
          <span>Cerrar Sesion</span>
          <Link to="/login"></Link>
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default App;
