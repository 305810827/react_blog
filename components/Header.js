import React, { useState, useEffect } from 'react';
import '../public/style/components/header.css';
import Router                         from 'next/router';
import Link                           from 'next/link';
import { Row, Col, Menu }             from 'antd';
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined
}                                     from '@ant-design/icons';
import getTypeInfo                    from '../pages/api/getTypeInfo';

const Header = () => {
    const [navArray, setNavArray] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const result = await getTypeInfo();
            setNavArray(result);
        };
        fetchData();
    }, []);

    //跳转到列表页
    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/');
        } else {
            Router.push('/list?id=' + e.key);
        }
    };
    return (
      <div className="header">
          <Row type="flex" justify="center">
              <Col xs={ 24 } sm={ 24 } md={ 10 } lg={ 15 } xl={ 12 }>
                  <span className="header-logo">许演杰</span>
                  <span className="header-txt">前端开发工程师。</span>
              </Col>

              <Col className="memu-div" xs={ 0 } sm={ 0 } md={ 14 } lg={ 8 }
                   xl={ 6 }>
                  <Menu mode="horizontal" onClick={handleClick}>
                      <Menu.Item key={0}>
                          <HomeOutlined/>
                          首页
                      </Menu.Item>
                      <Menu.Item key={1}>
                          <YoutubeOutlined/>
                          视频
                      </Menu.Item>
                      <Menu.Item key={2}>
                          <SmileOutlined/>
                          生活
                      </Menu.Item>
                      {/*{*/}
                      {/*    navArray.map((item) => {*/}
                      {/*        return (*/}
                      {/*          <Menu.Item key={ item.Id }>*/}
                      {/*              <Icon type={ item.icon }/>*/}
                      {/*              { item.typeName }*/}
                      {/*          </Menu.Item>*/}
                      {/*        );*/}
                      {/*    })*/}
                      {/*}*/}
                  </Menu>
              </Col>
          </Row>
      </div>
    );
};

export default Header;
