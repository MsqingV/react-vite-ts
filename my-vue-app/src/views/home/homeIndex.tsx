/*
 * @Author: 马双庆 3489627692.qq.com
 * @Date: 2024-06-19 21:09:52
 * @LastEditors: 马双庆 3489627692.qq.com
 * @LastEditTime: 2024-06-27 15:19:34
 * @FilePath: /vite+ts+react/my-vue-app/src/views/home/homeIndex.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef, useState } from "react";
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
import tabsOne from "../../assets/icon/tabs1.webp";
import tabsTwo from "../../assets/icon/tabs2.webp";
import tabsThree from "../../assets/icon/tabs3.webp";
import tabsFour from "../../assets/icon/tabs4.webp";
import tabsFive from "../../assets/icon/tabs5.webp";
import tabsSix from "../../assets/icon/tabs6.webp";
import tabsSeven from "../../assets/icon/tabs7.webp";
import tabsEight from "../../assets/icon/tabs8.webp";
import tabsNine from "../../assets/icon/tabs9.webp";
import rili from "../../assets/icon/日历.webp";

import aaa from "../../assets/image/aaa.gif";
import bbb from "../../assets/image/aab.webp";
import ccc from "../../assets/image/aac.webp";
import ddd from "../../assets/image/aad.webp";
import eee from "../../assets/image/aae.webp";
import fff from "../../assets/image/aaf.webp";
import yyy from "../../assets/image/yyy.webp";
import ppp from "../../assets/image/ppp.webp";
import type { SearchProps } from "antd/es/input/Search";
import RouterList from "../../router/RouteConfig";
import { CameraOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link, Outlet } from "react-router-dom";

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
  marginLeft: "210px",
  backgroundColor: "#ffffff",
};

const siderStyle: React.CSSProperties = {
  position: "fixed", // 固定在视口
  left: 0, // 左侧边缘对齐
  top: "55px", // 距离顶部的距离，假设Header的高度为55px
  height: "calc(100vh - 55px)", // 减去Header的高度，如果Header高度可变，这个值可能需要相应调整
  width: "210px", // 侧边栏的宽度
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
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  // 添加一个样式对象用于设置Menu的滚动条
  const menuStyle: React.CSSProperties = {
    maxWidth: "210px", // 根据需要设置最大宽度
    maxHeight: "600px", // 设置菜单的最大高度
    overflow: "auto",
    scrollbarWidth: "none",
  };

  const leftEm = "<";
  const rightEm = ">";
  // 定义一个合适的类型，假设是 HTMLDivElement
  type TabContextRef = HTMLDivElement | null;

  // 创建一个 ref 对象，引用 contextTabs 容器
  const contextTabsRef = useRef<TabContextRef>(null);
  // 使用 useState 保存当前滚动位置
  const [scrollPosition, setScrollPosition] = useState(0);
  // 保存滚动方向，true 表示向右滚动，false 表示向左滚动
  const [scrollDirection, setScrollDirection] = useState<boolean>(false);

  // 更新 handleScrollClick 函数
  const handleScrollClick = (direction: "left" | "right") => {
    if (contextTabsRef.current) {
      const tabs = contextTabsRef.current;
      const currentScrollLeft = tabs.scrollLeft;
      const scrollWidth = tabs.scrollWidth;
      const clientWidth = tabs.clientWidth;

      // 计算新的滚动位置
      const newScrollLeft =
        direction === "left"
          ? currentScrollLeft - clientWidth
          : currentScrollLeft + clientWidth;

      // 如果是点击右侧箭头并且到达最左边，或者点击左侧箭头到达最右边，则切换显示另一个箭头
      if (direction === "right" && newScrollLeft >= scrollWidth - clientWidth) {
        setScrollDirection(true); // 显示左侧箭头
      } else if (direction === "left" && newScrollLeft <= 0) {
        setScrollDirection(false); // 显示右侧箭头
      }

      // 更新滚动位置状态
      setScrollPosition(newScrollLeft);

      // 实际滚动操作
      tabs.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // 定义一个合适的类型，假设是 HTMLDivElement
  type SumContextRef = HTMLDivElement | null;

  // 创建一个 ref 对象，引用 contextTabs 容器
  const sumnitRightRef = useRef<SumContextRef>(null);
  // 使用 useState 保存当前滚动位置
  const [OnscrollPosition, OnsetScrollPosition] = useState(0);
  // 保存滚动方向，true 表示向右滚动，false 表示向左滚动
  const [OnscrollDirection, OnsetScrollDirection] = useState<boolean>(false);

  // 更新 handleScrollClick 函数
  const OnhandleScrollClick = (direction: "left" | "right") => {
    if (sumnitRightRef.current) {
      const tabs = sumnitRightRef.current;
      const currentScrollLeft = tabs.scrollLeft;
      const scrollWidth = tabs.scrollWidth;
      const clientWidth = tabs.clientWidth;

      // 计算新的滚动位置
      const newScrollLeft =
        direction === "left"
          ? currentScrollLeft - clientWidth
          : currentScrollLeft + clientWidth;

      // 如果是点击右侧箭头并且到达最左边，或者点击左侧箭头到达最右边，则切换显示另一个箭头
      if (direction === "right" && newScrollLeft >= scrollWidth - clientWidth) {
        OnsetScrollDirection(true); // 显示左侧箭头
      } else if (direction === "left" && newScrollLeft <= 0) {
        OnsetScrollDirection(false); // 显示右侧箭头
      }

      // 更新滚动位置状态
      OnsetScrollPosition(newScrollLeft);

      // 实际滚动操作
      tabs.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // 用于记录当前悬停的li元素索引
  const [activeIndex, setActiveIndex] = useState(-1);

  // 处理鼠标悬停事件
  const handleMouseEnter = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
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
            defaultSelectedKeys={["/"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            {RouterList.filter((route) => route.path !== "/login").map(
              (item) => {
                return (
                  <Menu.Item
                    key={item.path}
                    icon={<img className="ImageMeat" src={item.meta.icon} />}
                  >
                    <Link to={item.path}>{item.meta.pageTitle}</Link>
                  </Menu.Item>
                );
              }
            )}
          </Menu>
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

          <div className="contextTabs" ref={contextTabsRef}>
            <span
              className={`contextTabs-left ${scrollDirection ? "" : "hidden"}`}
              onClick={() => handleScrollClick("left")}
            >
              {leftEm}
            </span>
            <span
              className={`contextTabs-right ${
                !scrollDirection ? "" : "hidden"
              }`}
              onClick={() => handleScrollClick("right")}
            >
              {rightEm}
            </span>
            <ul className="contextTop-ul-for">
              <li>
                <img src={tabsOne} alt="" />
              </li>
              <li>
                <img src={tabsTwo} alt="" />
              </li>
              <li>
                <img src={tabsThree} alt="" />
              </li>
              <li>
                <img src={tabsFour} alt="" />
              </li>
              <li>
                <img src={tabsFive} alt="" />
              </li>
              <li>
                <img src={tabsSix} alt="" />
              </li>
              <li>
                <img src={tabsSeven} alt="" />
              </li>
              <li>
                <img src={tabsEight} alt="" />
              </li>
              <li>
                <img src={tabsNine} alt="" />
              </li>
            </ul>
          </div>

          <div className="sumbit">
            <div className="sumbitTop">
              <div className="sumbitTop-one">
                <h1>今日推荐</h1>
                <span>开通会员免费用</span>
              </div>
              <ul className="sumbitTop-two">
                <li>精选推荐</li>
                <li>热点关注</li>
                <li>国际禁毒日</li>
                <li>建党节</li>
                <li>小暑</li>
                <li>毕业季</li>
              </ul>
              <span className="sumbitTop-three">查看更多 {rightEm}</span>
            </div>
            <div className="sumbitButton">
              <div className="sumbitButton-left">
                <div className="sumbitButton-left-top">
                  <span className="sumbitButton-left-top-jia">+</span>
                  <span className="sumbitButton-left-top-text">空白创建</span>
                </div>
                <div className="sumbitButton-left-top-img">
                  <img src={rili} alt="" />
                </div>
              </div>

              <div className="sumbit-right" ref={sumnitRightRef}>
                <span
                  className={`sumbit-right-left ${
                    OnscrollDirection ? "" : "hiddens"
                  }`}
                  onClick={() => OnhandleScrollClick("left")}
                >
                  {leftEm}
                </span>
                <span
                  className={`sumbit-right-right ${
                    !OnscrollDirection ? "" : "hiddens"
                  }`}
                  onClick={() => OnhandleScrollClick("right")}
                >
                  {rightEm}
                </span>
                <ul>
                  <li
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    className={activeIndex === 0 ? "active" : ""}
                  >
                    <img src={aaa} alt="" />
                    <span className="LiName">111</span>
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    className={activeIndex === 1 ? "active" : ""}
                  >
                    <img src={bbb} alt="" />
                    <span className="LiName1">111</span>
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    className={activeIndex === 2 ? "active" : ""}
                  >
                    <img src={ccc} alt="" />
                    <span className="LiName2">111</span>
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                    className={activeIndex === 3 ? "active" : ""}
                  >
                    <img src={ddd} alt="" />
                    <span className="LiName3">111</span>
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                    className={activeIndex === 4 ? "active" : ""}
                  >
                    <img src={eee} alt="" />
                    <span className="LiName4">111</span>
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                    className={activeIndex === 5 ? "active" : ""}
                  >
                    <img src={fff} alt="" />
                    <span className="LiName5">111</span>
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter(6)}
                    onMouseLeave={handleMouseLeave}
                    className={activeIndex === 6 ? "active" : ""}
                  >
                    <img src={yyy} alt="" />
                    <span className="LiName6">111</span>
                  </li>
                  <li className="cha">
                    <span>查看更多{rightEm}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hengImg">
            <img src={ppp} alt="" />
          </div>


      
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomeIndex;
