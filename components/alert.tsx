import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image'
import logo from 'pages/images/logo.svg'

export default function Alert({ preview }) {
  return (
    <header id="masthead" className="site-header clearfix ">
        <div id="header-text-nav-container" className="clearfix">
          <div className="inner-wrap">
            <div id="header-text-nav-wrap" className="clearfix">
              <div id="header-left-section">
                <div id="header-logo-image">
                  <a href="/" className="custom-logo-link" rel="home" aria-current="page"><Image src={logo} alt="সংশয় – চিন্তার মুক্তির আন্দোলন"                   
                  width={5000} /></a> 
                </div>
                <div id="header-text" className="screen-reader-text">
                  <h1 id="site-title">
                    <a href="/" title="সংশয় – চিন্তার মুক্তির আন্দোলন" rel="home">সংশয় – চিন্তার মুক্তির আন্দোলন</a>
                  </h1>
                  <p id="site-description">
                    জ্ঞান যেখানে সীমাবদ্ধ, যুক্তি যেখানে আড়ষ্ট, মুক্তি সেখানে অসম্ভব 
                  </p>
                </div>
              </div>
              <div id="header-right-section">
                <div id="header-right-sidebar" className="clearfix">
                  <aside id="text-5" className="widget widget_text clearfix">
                    <div className="textwidget">
                      <h2 style={{fontFamily: 'Shobuj Nolua', fontSize: '1.5em', color: 'green'}}>“জ্ঞান যেখানে সীমাবদ্ধ,<br />যুক্তি যেখানে আড়ষ্ট,<br />মুক্তি সেখানে অসম্ভব” </h2>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
       
          <nav id="site-navigation" className="main-navigation clearfix" role="navigation">
    <div className="inner-wrap clearfix">
     
     
     
     
     
     
      <p className="menu-toggle" />
      <div className="menu-primary-container">
        <ul id="menu-home" className="menu">
          <li id="menu-item-16686" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-16686"><a href="/" aria-current="page">মূলপাতা</a></li>
          <li id="menu-item-2921" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2921"><a href="/history/">ইতিহাস</a></li>
          <li id="menu-item-8501" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8501">
            <a href="#">দর্শন</a>
            <ul className="sub-menu">
              <li id="menu-item-8480" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8480"><a href="/philosophy/philosophical-questions/">দর্শনের মৌলিক প্রশ্নাবলী</a></li>
              <li id="menu-item-2926" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2926"><a href="/philosophy/philosophy/">নাস্তিকতার দার্শনিক অবস্থানসমূহ</a></li>
            </ul>
          </li>
          <li id="menu-item-8506" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8506">
            <a href="#">বিজ্ঞান</a>
            <ul className="sub-menu">
              <li id="menu-item-8463" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8463"><a href="/science/universe/">মহাবিশ্বের উদ্ভব</a></li>
              <li id="menu-item-8462" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8462"><a href="/science/earth/">পৃথিবীর উদ্ভব</a></li>
              <li id="menu-item-8483" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8483"><a href="/science/abiogenesis/">প্রাণের উদ্ভব ও বিকাশ</a></li>
              <li id="menu-item-8482" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8482"><a href="/science/evolution/">বিবর্তন তত্ত্ব</a></li>
            </ul>
          </li>
          <li id="menu-item-8507" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8507">
            <a href="#">তথ্যভাণ্ডার</a>
            <ul className="sub-menu">
              <li id="menu-item-17047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17047"><a href="/references/archive/">প্রবন্ধ আর্কাইভ</a></li>
              <li id="menu-item-19760" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19760"><a href="/references/islam-archive/">ইসলাম আর্কাইভ</a></li>
              <li id="menu-item-7532" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7532"><a href="/references/islam/">তথ্য সমূহ – ইসলাম ধর্ম</a></li>
              <li id="menu-item-7529" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7529"><a href="/references/hinduism/">তথ্য সমূহ – হিন্দু ধর্ম</a></li>
              <li id="menu-item-7538" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7538"><a href="/references/christianity/">তথ্য সমূহ – খ্রিস্টধর্ম</a></li>
            </ul>
          </li>
          <li id="menu-item-2924" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2924"><a href="/library/">গ্রন্থাগার</a></li>
          <li id="menu-item-6934" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-6934"><a href="/about/terms-service-privacy-policy/">নিয়মাবলী</a></li>
          <li id="menu-item-21047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21047"><a href="/rules/">নীতিমালা</a></li>
          <li id="menu-item-2925" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2925"><a href="/faq/">উত্তরসমূহ</a></li>
        </ul>
      </div>
    </div>
  </nav>


        </div>
      </header>
  )
}
