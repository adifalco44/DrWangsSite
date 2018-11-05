import React, { Component } from 'react';
import './App.css';

let data = {
  0: {
    0:[
      {key:1,text:"Social Sensing"},
      {key:2,text:"Crowdsourcing"},
      {key:3,text:"Cyber-Physical-Human Systems"},
      {key:4,text:"Big Data Analytics"},
      {key:5,text:"Reliable Information Disstillation Systems"},
      {key:6,text:"Smart Cities"},
      {key:7,text:"Internet of Things"},
      {key:8,text:"Edge Computing"},
      {key:9,text:"Disaster Emergrency Response"},
      {key:10,text:"Network Science"},
      {key:11,text:"Online Social Networks"},
      {key:12,text:"Trust & Credibility Analysis"}
      ],
    1:[
        {key:1,text:"student 1"},
        {key:2,text:"student 2"},
        {key:3,text:"student 3"},
        {key:4,text:"student 4"},
      ],
  },
  1: [
    {key:1,text:"Dong Wang.\"Data Reliability Challenges of Cyber-Physical Systems,\" Elsevier, 2016."},
    {key:2,text:"Dong Wang. \"Big Data and Information Distillation in Social Sensing,\" Taylor & Francis LLC, CRC Press, 2015."},
    {key:3,text:"Tarek Abdelzaher and Dong Wang. \"Analytic Challenges in Social Sensing\" The Art of Wireless Sensor Networks, Springer, 2014."}
  ],
  2: [
    {key:1,bold:"Google Faculty Research Award:",text:"Google:Spring 2018"},
    {key:2,bold:"Young Investigator Program Award (YIP):",text:"Army Research Office (ARO):Fall 2017"},
    {key:3,bold:"Wing Kai Cheng Fellowship:",text:"University of Illiniois at Urbana Champaign:Fall 2012"}
  ],
  3: [
    {key:1,text:"Spring 2018: Social Sensing and Cyber-Physical Systems"},
    {key:2,text:"Fall 2017:Computer Networks"}
  ],
  4: [
    {key:0,text:"Steering Committee Member of Second International Workship on Social Sensing (SocialSens 2017)"},
    {key:1,text:"TPC Chair of First International Workshop on Social  Sensing (SocialSens 2015)"},
    {key:2,text:"TPC member of ACM/IEEE ICCPS 2018,ACMIEEE IPSN 2017,2018, IEEE IoTDI  2017,  2018, IEEE CPSCom 2016"},
    {key:3,text:"TPC member of ACM KDD 2015, 2016, IEEE ICDM 2015, CIKM 2015"},
    {key:4,text:"TPC member of  IEEE International Conference on Big Data Science and engineering (BDSE 2013, 2015)"},
    {key:5,text:"TPC member of IEEE DCoSS 2016, CloudCom 2013"}
  ]
};


class App extends Component {

  state = {tabLocator:0,returnObject:null};

  renderData(){
    let renderObj = [];
    if (this.state.tabLocator===0){
      renderObj.push(
        <div>
          <div className="App-bio-top-container" style={{backgroundColor:'#ffe7e0'}}>
            <img src="https://www3.nd.edu/~dwang5/pic/dong1b.jpg" width="150" height="150" alt="Dr. Wang"/>
            <div style={{height:"80%"}}>
              <p style={{fontSize:'10px'}}>Ph.D.</p>
              <p style={{fontSize:'10px'}}>Assistant Professor</p>
              <p style={{fontSize:'10px'}}>Department of Computer Science and Engineering Interdisciplinary Center</p>
              <p style={{fontSize:'10px'}}>for Network Science and Applications (iCeNSA)</p>
              <p style={{fontSize:'10px'}}>University of Notre Dame</p>
              <p style={{fontSize:'10px'}}>Phone: +1-574-631-3749</p>
              <p style={{fontSize:'10px'}}>Email: dwang5@nd.edu</p>
            </div>
          </div>
          <div className="Title-text-div"  style={{backgroundColor:'#ffe7e0'}}>
              <div className="App-bio-title-container" style={{width:'180px'}}>
                <div className="App-bio-title">
                  <p> Biography </p>
                </div>
              </div>
               <p style={{paddingLeft:10,paddingRight:10,textAlign:'center'}}>I am an assistant professor in the <a href="engineering.nd.edu">College of Engineering</a> at the <a href="nd.edu">University of Notre Dame </a>, with appointments in the <a href="www.icensa.com">
               Interdisciplinary Center for Network Science and Applications (iCeNSA) </a> and <a href="cse.nd.edu">Department of Computer Science and Engineering</a>. I received my Ph.D.
               degree in Computer Science at <a href="www.uiuc.edu">University of Illinois at Urbana Champaign (UIUC)</a> with Professor Tarek F. Abdelzaher. I got my Master's degree in
               Electrical Engineering from <a href="english.pku.edu.cn">Peking University (PKU)</a>, and Bachelor degree in Electrical Engineering from <a href="http://www.oice.uestc.edu.cn/en/">University of Electronic
               Science and Technology of China (UESTC)</a>.
              </p>
          </div>
          <div className="Title-text-div"  style={{backgroundColor:'#ffe7e0'}}>
              <div className="App-bio-title-container" style={{width:'180px'}}>
                <div className="App-bio-title">
                  <p> Inqueries </p>
                </div>
              </div>
               <p style={{paddingLeft:10,paddingRight:10,textAlign:'center'}}>I am looking for highly motivated graduate students and visiting scholars. If you are interested in working with me, please feel free to drop me an email with your CV.</p>
          </div>
        </div>
        );
        let tmpRender = [];
        tmpRender.push(
          <div className="App-bio-title-container" style={{width:'180px'}}>
            <div className="App-bio-title">
              <p> Research Interests</p>
            </div>
          </div>
        );
        data[0][0].map(item => tmpRender.push(
          <div>
            <p className="App-list-items-container">{item.text}</p>
          </div>
        ));
        renderObj.push(<div className="Title-text-div"  style={{backgroundColor:'#ffe7e0'}}>{tmpRender}</div>);
        tmpRender = [];
        tmpRender.push(
          <div className="App-bio-title-container" style={{width:'180px'}}>
            <div className="App-bio-title">
              <p> Students </p>
            </div>
          </div>
        );
        data[0][1].map(item => tmpRender.push(
          <div>
            <p className="App-list-items-container">{item.text}</p>
          </div>
        ));
        renderObj.push(<div className="Title-text-div"  style={{backgroundColor:'#ffe7e0'}}>{tmpRender}</div>);
    }else if (this.state.tabLocator!==0){
      data[this.state.tabLocator].map(item => renderObj.push(
        <div>
          <p className="App-list-items-container">{item.text}</p>
        </div>
      ));
    }
    renderObj.push(<div style={{height:20}}/>);
    return renderObj;
  }

  clickableStuff(tabLocatorTmp){
  	this.setState({tabLocator:tabLocatorTmp});
  }

  render() {
    return (
      <div className="Background-pane">
        <div className="App-sub">
          <header className="App-header">
          	<p>Dong Wang -- site in development</p>
          </header>
          <div className="App-tab-bar">
          	<div onClick={() => this.clickableStuff(0)}>
          		<p>About</p>
          	</div>
          	<div onClick={() => this.clickableStuff(1)}>
          		<p>Publications</p>
          	</div>
          	<div onClick={() => this.clickableStuff(2)}>
          		<p>Honors</p>
          	</div>
          	<div onClick={() => this.clickableStuff(3)}>
          		<p>Teaching</p>
          	</div>
          	<div onClick={() => this.clickableStuff(4)}>
          		<p>Service</p>
          	</div>
          </div>
          <div>
          {this.renderData()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
