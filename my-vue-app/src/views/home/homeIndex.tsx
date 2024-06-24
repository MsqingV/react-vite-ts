/*
 * @Author: 马双庆 3489627692.qq.com
 * @Date: 2024-06-19 21:09:52
 * @LastEditors: 马双庆 3489627692.qq.com
 * @LastEditTime: 2024-06-24 10:33:08
 * @FilePath: /vite+ts+react/my-vue-app/src/views/home/homeIndex.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import { Layout } from "antd";
import {
  Dropdown,
  Menu,
  Button,
  Space,
  Select,
  Input,
  Tooltip,
  Carousel,
} from "antd";
import Image from "../../assets/a.png";
import ImageOne from "../../assets/e.webp";
import ImageTwo from "../../assets/q.webp";
import ImageThree from "../../assets/r.webp";
import ImageFour from "../../assets/t.webp";
import ImageFive from "../../assets/w.webp";
import type { SearchProps } from "antd/es/input/Search";
import { CameraOutlined , MailOutlined , AppstoreOutlined , SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];
const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 9999,
  height: 55,
  width: "100%",
  maxWidth: 1920,
  color: "rgb(140 , 140 , 140)",
  //   lineHeight: "60px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const contentStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "100vh",
  marginLeft: '210px',
  backgroundColor: "#cefc",
};

const siderStyle: React.CSSProperties = {
  position: 'fixed', // 固定在视口
  left: 0,            // 左侧边缘对齐
  top: '55px',        // 距离顶部的距离，假设Header的高度为55px
  height: 'calc(100vh - 55px)', // 减去Header的高度，如果Header高度可变，这个值可能需要相应调整
  width: "210px",     // 侧边栏的宽度
  maxWidth: "210px",
  backgroundColor: "#ffffff",
  zIndex: 999,
  scrollbarWidth: "none",
  // ...其他样式
};
const highlightStyle = {
  borderTop: "3px solid rgb(16,68,255)",
  color: "rgb(16,68,255)",
  cursor: "pointer",
};

const layoutStyle = {
  //   overflow: "hidden",
  width: "100vw",
  maxWidth: 1920,
  height: "100%",
  minHeight: "100vh",

};

function HomeIndex() {
  // 创建一个菜单数组，每个菜单项可以有不同的配置
  const menus = [
    {
      key: "1",
      label: "免费模版",
    },
    {
      key: "2",
      label: "开通会员",
    },
    {
      key: "3",
      label: "解决方案",
    },
    {
      key: "4",
      label: "产品服务",
    },
    {
      key: "5",
      label: "内容中台",
    },
    {
      key: "6",
      label: "资源与合作",
    },
    // ...更多菜单项
  ];
  const [highlightKey, setHighlightKey] = useState<string | null>(
    menus.length > 0 ? menus[0].key : null
  );

  const options = [
    {
      value: "全部",
      label: "全部",
    },
    {
      value: "H5",
      label: "H5",
    },
    {
      value: "长页",
      label: "长页",
    },
    {
      value: "海报",
      label: "海报",
    },
    {
      value: "表单",
      label: "表单",
    },
    {
      value: "互动",
      label: "互动",
    },
    {
      value: "电子画册",
      label: "电子画册",
    },
    {
      value: "视频",
      label: "视频",
    },
    {
      value: "解决方案",
      label: "解决方案",
    },
  ];
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  //菜单
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };



   // 添加一个样式对象用于设置Menu的滚动条
  const menuStyle: React.CSSProperties = {
    maxWidth: '210px', // 根据需要设置最大宽度
    maxHeight: '600px', // 设置菜单的最大高度
    overflow:'auto',
    scrollbarWidth: 'none',
    // 如果需要自定义滚动条样式
    // '&::-webkit-scrollbar': {
    //   width: '1px',
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   background: 'rgba(0,0,0,.2)',
    //   borderRadius: '4px',
    // },
  };
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="leftBox">
          <img
            src="https://lib.eqh5.com/eqx.layout/images/new_logo.svg"
            alt=""
          />
        </div>

        <div className="centerBox">
          <ul className="centerTabs">
            {menus.map((menu, index) => (
              <li
                key={menu.key}
                className={
                  index === 0
                    ? "centerTabs-li hot"
                    : "centerTabs-li" &&
                      `centerTabs-li ${index === 1 ? "hot" : ""}`
                }
                style={menu.key === highlightKey ? highlightStyle : {}}
                onClick={() => setHighlightKey(menu.key)}
              >
                {index === 1 && (
                  <div className="ban-tag">版权0风险</div> // 给第二个li添加hot标签
                )}
                <Dropdown
                  overlay={
                    <Menu>
                      {menus.map((item) => (
                        <Menu.Item key={item.key}>{item.label}</Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomCenter"
                >
                  <div>{menu.label}</div>
                </Dropdown>
                {index === 0 && (
                  <div className="hot-tag">HOT</div> /* 添加 "hot" 标签 */
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rightBox">
          <Button type="primary" size="small">
            未登陆/注册
          </Button>
        </div>
      </Header>
      <Layout>
        <Sider width="210px" className="siderDiv" style={siderStyle}>
          <Menu
            onClick={onClick}
            style={menuStyle}
            className="SiderMenu"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Content style={contentStyle}>
          <div className="contextTop">
            <div className="contextTop-left">
              <img src={Image} alt="" />
            </div>

            <div className="contextTop-center">
              <div className="contextTop-search">
                <Space.Compact
                  className="contextTop-search-index"
                  style={{ width: 440, height: 40 }}
                >
                  <Select
                    defaultValue="全部"
                    size="large"
                    options={options}
                    style={{ width: 130, height: 40, overflow: "hidden" }}
                  />
                  <Search
                    placeholder="互动游戏"
                    onSearch={onSearch}
                    size="large"
                    enterButton
                    suffix={
                      <Tooltip title="Extra information">
                        <CameraOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                      </Tooltip>
                    }
                  />
                </Space.Compact>
              </div>
              <div className="contextTop-ul">
                <ul className="contextTop-ul-for">
                  <li className="contextTop-li-one">邀请函</li>
                  <li>婚礼邀请函</li>
                  <li>会议邀请函</li>
                  <li>夏至海报</li>
                  <li>互动游戏</li>
                  <li>团建邀请函</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contextMiddel">
            <Carousel
              arrows
              infinite={true}
              autoplay={true}
              autoplaySpeed={2000}
            >
              <div style={{ borderRadius: "13px" }}>
                <img src={ImageOne} alt="" />
              </div>
              <div style={{ borderRadius: "13px" }}>
                <img src={ImageTwo} alt="" />
              </div>
              <div style={{ borderRadius: "13px" }}>
                <img src={ImageThree} alt="" />
              </div>
              <div style={{ borderRadius: "13px" }}>
                <img src={ImageFour} alt="" />
              </div>
              <div style={{ borderRadius: "13px" }}>
                <img src={ImageFive} alt="" />
              </div>
            </Carousel>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomeIndex;
