import React, { useEffect, useState } from 'react';
import Head                           from 'next/head';
import { Row, Col, List }             from 'antd';
import Header                         from '../components/Header';
import Author                         from '../components/Author';
import Advert                         from '../components/Advert';
import Footer                         from '../components/Footer';
import getArticleList                 from './api/getArticleList';
import {
    CalendarOutlined,
    FolderOutlined,
    FireOutlined
}                                     from '@ant-design/icons';
import '../public/style/pages/index.css';
import Link                           from 'next/link';
import marked                         from 'marked';
import hljs                           from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

const Home           = (list) => {
    const [myList, setMyList] = useState(list.data);
    useEffect(() => {
        setMyList(list.data);
    });
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer   : renderer,
        gfm        : true,
        pedantic   : false,
        sanitize   : false,
        tables     : true,
        breaks     : false,
        smartLists : true,
        smartypants: false,
        xhtml      : false,
        highlight  : function (code) {
            return hljs.highlightAuto(code).value;
        }

    });
    return (
      <div>
          <Head>
              <title>Home</title>
          </Head>
          <Header/>
          <Row className="comm-main" type="flex" justify="center">
              <Col className="comm-left" xs={ 24 } sm={ 24 } md={ 16 } lg={ 18 }
                   xl={ 14 }>
                  <List
                    header={ <div>最新日志</div> }
                    itemLayout="vertical"
                    dataSource={ myList }
                    renderItem={ item => (
                      <List.Item>
                          <div className="list-title">
                              <Link href={ {
                                  pathname: '/detailed',
                                  query   : {id: item.id}
                              } }>
                                  <a>{ item.title }</a>
                              </Link>
                          </div>
                          <div className="list-icon">
                              <span><CalendarOutlined/> { item.addTime }</span>
                              <span><FolderOutlined/> { item.typeName }</span>
                              <span><FireOutlined/> { item.viewCount }人</span>
                          </div>
                          <div className="list-context"
                               dangerouslySetInnerHTML={ {__html: marked(item.introduce)} }
                          />
                          {/*<div className="list-context">{ item.introduce }</div>*/ }
                      </List.Item>
                    ) }
                  />
              </Col>

              <Col className="comm-right" xs={ 0 } sm={ 0 } md={ 7 } lg={ 5 }
                   xl={ 4 }>
                  <Author/>
                  <Advert/>
              </Col>
          </Row>
          <Footer/>
      </div>
    );
};
Home.getInitialProps = getArticleList;
export default Home;
