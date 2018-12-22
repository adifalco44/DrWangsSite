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
    {key:3,text:"Tarek Abdelzaher and Dong Wang. \"Analytic Challenges in Social Sensing\" The Art of Wireless Sensor Networks, Springer, 2014."},
    {key:4,text:"Paper Code: Journal paper: [J]; Conference paper: [C]; Workshop paper: [W]"},
    {key:5,text:"Author Code: Ph.D. students I advised: *; Undergraduate students I advised: +; Students I supervised in my course: #"},
    {key:6,text:"[C] Daniel Zhang*, Qi Li, Herman Tong+, Jose Badilla+, Yang Zhang*, Dong Wang, Crowdsourcing-based Copyright Infringement Detection in Live Video Streams, The IEEE/ACM International Conference on Social Networks Analysis and Mining (ASONAM 2018) , Full Paper, Barcelona, Spain, August, 2018. (Acceptance rate: 15%)"},
    {key:7,text:"[C] Daniel Zhang*, Jose Badilla+, Yang Zhang*, Dong Wang, Towards Reliable Missing Truth Discovery in Online Social Media Sensing Applications, The IEEE/ACM International Conference on Social Networks Analysis and Mining (ASONAM 2018) , Full Paper, Barcelona, Spain, August, 2018. (Acceptance rate: 15%)"},
    {key:8,text:"[J] Aastha Nigam#, Reid A Johnson, Dong Wang, Nitesh V Chawla,. Characterizing Online Health and Wellness Information Consumption: A Study, Information Fusion Journal , in press, 2018."},
    {key:9,text:"[C] Yang Zhang*, Nathan Vance*, Daniel Zhang*, Dong Wang. Optimizing Online Task Allocation for Multi-Attribute Social Sensing, The 27th International Conference on Computer Communications and Networks (ICCCN 2018) , Full Paper, Hangzhou, China, July, 2018. (Acceptance rate: 29%)"},
    {key:10,text:"[J] Daniel Zhang*, Dong Wang, Nathan Vance*, Yang Zhang*, Steven Mike+. \"On Scalable and Robust Truth Discovery in Big Data Social Media Sensing Applications,\" IEEE Transactions on Big Data (TBD) , in press, 2018."},
    {key:11,text:"[C] Yang Zhang*, Nathan Vance*, Daniel Zhang*, Dong Wang, \"On Opinion Characterization in Social Sensing: A Multi-View Subspace Learning Approach\", IEEE International Conference on Distributed Computing in Sensor Systems (DCOSS 18) , Full Paper, New York, June, 2018."},
    {key:12,text:"[J] Dong Wang, Boleslaw K. Szymanski, Tarek Abdelzaher, Heng Ji, Lance Kaplan, \"The Age of Social Sensing,\" IEEE Computer, in press, 2018"},
    {key:13,text:"[C] Daniel Zhang*, Yue Ma, Yang Zhang*, X, Sharon Hu, Dong Wang, \"A Real-Time and Non-Cooperative Task Allocation Framework for Social Sensing Applications in Edge Computing Systems\", 2018 IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS 18) , Full Paper, Porto, Portugal, 2018."},
    {key:14,text:"[C] Dong Wang, Daniel Zhang*, Chao Huang*. \"Towards Reliable Hypothesis Validation in Social Sensing Applications\", IEEE Communications Society Conference on Sensor, Mesh and Ad Hoc Communications and Networks (SECON'18) , Full Paper, Hong Kong, June, 2018. (Acceptance rate: 23%)"},
    {key:15,text:"[J] Dong Wang, Nathan Vance*, Chao Huang*. \"Who to Select: Identifying Critical Sources in Social Sensing,\" Elsevier Knowledge Based Systems (KBS), in press, 2018."},
    {key:16,text:"[C] Daniel Zhang*, Dong Wang, Yang Zhang*. \"Constraint-Aware Dynamic Truth Discovery in Big Data Social Media Sensing,\" 2017 IEEE International Conference on Big Data (IEEE BigData 2017) , Full Paper, Boston, December, 2017. (Acceptance rate: 18%)"},
    {key:17,text:"[C] Daniel Zhang*, Dong Wang, Hao Zheng, Xin Mu#, Qi Li, Yang Zhang*. \"Large-scale Point-of-Interest Category Prediction Using Natural Language Processing Models,\" 2017 IEEE International Conference on Big Data (IEEE BigData 2017), Short Paper, Boston, December, 2017. (Acceptance rate: 20%)"},
    {key:18,text:"[C] Jermaine Marshall*, Arturo Argueta, Dong Wang. \"A Neural Network Approach for Truth Discovery in Social Sensing,\" The 14th International Conference on Mobile Ad-hoc and Sensor Systems (MASS 17), Short Paper, Orlando, Florida, October, 2017."},
    {key:19,text:"[C] Chao Huang*, Dong Wang. \"Critical Source Selection in Social Sensing Applications,\" 13th IEEE International Conference on Distributed Computing in Sensor Systems (DCOSS 17), Full Paper, Ottawa, Canada, June, 2017."},
    {key:20,text:"[C] Chao Huang*, Dong Wang, Shenglong Zhu. \"Towards Diversified Local Users Identification using Location Based Social Networks,\" The 2017 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining ASONAM 2017, Sydney, August, 2017. (Acceptance rate: 25%)"},
    {key:21,text:"[C] Chao Huang*, Dong Wang, Jun Tao, Brian Mann. \"On Physical-Social-Aware Localness Inference By Exploring Big Data from Location-Based Services,\" IEEE Transactions on Big Data (TBD), in press, 2017."},
    {key:22,text:"[C] Xian Wu, Yuxiao Dong, Chao Huang*, Jian Xu, Dong Wang, Nitesh Chawla. \"UAPD: Predicting Urban Anomalies from Spatial-Temporal Data,\" European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (PKDD), Full Paper, Skopje, Macedonia, September, 2017. (Acceptance rate: 27%)"},
    {key:23,text:"[C] Daniel Zhang*, Chao Zhang, Dong Wang, Doug Thain, Xin Mu#, Greg Madey and Chao Huang*. \"Towards Scalable and Dynamic Social Sensing Using A Distributed Computing Framework,\" The 37th IEEE International Conference on Distributed Computing (ICDCS 2017) , Full Paper, Atlanta, GA, USA on June. (Acceptance rate: 16.9%)"},
    {key:24,text:"[J] Chao Huang*, Dong Wang, Shenglong Zhu, Brian Mann+. \"Toward Local Family Relationship Discovery in Location-based Social Network,\" Social Network Analysis and Mining (SNAM), Springer, in press, 2017."},
    {key:25,text:"[J] Chao Huang*, Dong Wang. \"Exploring Scalability and Time Sensitiveness in Reliable Social Sensing with Accuracy Assessment,\" IEEE Access, in press, 2017."},
    {key:26,text:"[J] Chao Huang*, Dong Wang, Nitesh Chawla. \"Scalable Uncertainty-Aware Truth Discovery in Big Data Social Sensing Applications for Cyber-Physical Systems,\" IEEE Transactions on Big Data (TBD), in press, 2017."},
    {key:27,text:"[J] Chao Huang*, Dong Wang, Brian Mann+. \"Towards Social-aware Interesting Place Finding in Social Sensing Applications,\" Elsevier Knowledge Based Systems (KBS), in press, 2017."},
    {key:28,text:"[C] Chao Huang*, Dong Wang, Shenglong Zhu. \"Where Are You From: Home Location Profiling of Crowd Sensors from Noisy and Sparse Crowdsourcing Data,\" IEEE International Conference on Computer Communications (IEEE INFOCOM 2017) , Full Paper, Atlanta, GA, May, 2017. (Acceptance rate: 21%)"},
    {key:29,text:"[J] Chao Huang*, Dong Wang, Tao Jun. \"An Unsupervised Approach to Inferring the Localness of People Using Incomplete Geo-Temporal Online Check-in Data,\" ACM Transactions on Intelligent Systems and Technology (TIST), in press, 2017"},
    {key:30,text:"[C] Chao Huang*, Dong Wang. \"Towards Unsupervised Home Location Inference from Online Social Media,\" 2016 IEEE International Conference on Big Data (IEEE BigData 2016), Washington D.C., December, 2016. (Acceptance rate: 19%)"},
    {key:31,text:"[C] Daniel Zhang*, Rungang Han+, Dong Wang. \"On Robust Truth Discovery in Sparse Social Media Sensing,\" 2016 IEEE International Conference on Big Data (IEEE BigData 2016), Washington D.C., December, 2016. (Acceptance rate: 19%)"},
    {key:32,text:"[C] Chao Huang*, Xian Wu, Dong Wang. \"Crowdsourcing-based Urban Anomaly Prediction System for Smart Cities,\" The 25th ACM International Conference on Information and Knowledge Management (CIKM 2016), Indianapolis, IN, October, 2016. (Acceptance rate: 14%)"},
    {key:33,text:"[C] Jermaine Marshall*, Dong Wang. \"Mood-Sensitive Truth Discovery For Reliable Recommendation Systems in Social Sensing,\" 10th ACM Conference on Recommender Systems (Recsys 2016), Full Paper, Boston, MA, USA, September 2016. (Acceptance rate: 18%)"},
    {key:34,text:"[C] Chao Huang*, Dong Wang. \"Exploiting Spatial-Temporal-Social Constraints for Localness Inference Using Online Social Media\", The 2016 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM 2016) , Full Paper, San Francisco, August, 2016. (Acceptance rate: 13%)"},
    {key:35,text:"[C] Jermaine Marshall*, Munira Syed, Dong Wang. \"Hardness-aware Truth Discovery in Social Sensing Applications,\" 12th IEEE International Conference on Distributed Computing in Sensor Systems (DCOSS 16), Full Paper, Washington D.C., May, 2016."},
    {key:36,text:"[C] Chao Huang*, Dong Wang. \"Unsupervised Interesting Places Discovery in Location-Based Social Sensing,\" 12th IEEE International Conference on Distributed Computing in Sensor Systems (DCOSS 16), Full Paper, Washington D.C., May, 2016."},
    {key:37,text:"[W] Chao Huang*, Jermaine Marshall*, Dong Wang, Mianxiong Dong. \"Towards Reliable Social Sensing in Cyber-Physical-Social Systems\", The 1st IEEE Workshop on Parallel and Distributed Processing for Computational Social Systems (ParSocial 2016), Full Paper, Chicago., May, 2016."},
    {key:38,text:"[J] Prasanna Giridhar, Md Tanvir Amin, Tarek Abdelzaher, Dong Wang, Lance Kaplan, Jemin George, Raghu Ganti, \"ClariSense+: An Enhanced Traffic Anomaly Explanation Service Using Social Network Feeds,\" Pervasive and Mobile Computing, Accepted in 2016"},
    {key:39,text:"[C] Dong Wang, Jermaine Marshall*, Chao Huang*. \"Theme-Relevant Truth Discovery on Twitter: An Estimation Theoretical Approach,\" The 10th International AAAI Conference on Web and Social Media (ICWSM 16) , Full Paper, Cologne, Germany, May, 2016. (Acceptance rate: 17%)"},
    {key:40,text:"[C] Jermaine Marshall*, Dong Wang. \"Towards Emotional-aware Truth Discovery in Social Sensing Applications,\" The 2nd IEEE International Conference on Smart Computing (SMARTCOMP 2016), Full Paper, St. Louis, Missouri, May, 2016."},
    {key:41,text:"[C] Chao Huang*, Dong Wang. \"Topic-Aware Social Sensing with Arbitrary Source Dependency Graphs,\" The 15th ACM/IEEE International Conference on Information Processing in Sensor Networks (IPSN 16), Full Paper, Viena, Austria, April, 2016. (Acceptance rate: 19%)"},
    {key:42,text:"[C] Jize Zhang#, Dong Wang. \"Duplicate Report Detection in Urban Crowdsensing Applications for Smart City,\" 2015 IEEE International Conference on Smart City 2015 (SmartCity 2015), Full Paper, Chengdu, China, December, 2015. (Acceptance rate: 18%)"},
    {key:43,text:"[C] Chao Huang*, Dong Wang. \"On Interesting Place Finding in Social Sensing: An Emerging Smart City Application Paradigm,\" 2015 IEEE International Conference on Smart City 2015 (SmartCity 2015), Full Paper, Chengdu, China, December, 2015. (Acceptance rate: 18%)"},
    {key:44,text:"[J] Dong Wang, Tarek Abdelzaher, Lance Kaplan, Raghu Ganti, Shaohan Hu and Hengchang Liu, \"Reliable Social Sensing with Physical Constraints: Analytic Bounds and Performance Evaluation,\" Journal of Real-Time Systems, Volume 51, Issue 6, 2015."},
    {key:45,text:"[C] Chao Huang*, Dong Wang, Nitesh Chawla. \"Towards Time-Sensitive Truth Discovery in Social Sensing Applications,\" The 12th IEEE International Conference on Mobile Ad-hoc and Sensor Systems (IEEE MASS 2015), Full Paper, Dallas, Texas, USA, October, 2015. (Acceptance rate: 26%)"},
    {key:46,text:"[C] Chao Huang*, Dong Wang. \"Spatial-Temporal Aware Truth Finding in Big Data Social Sensing Applications,\" The 9th IEEE International Conference on Big Data Science and Engineering (BigDataSE 15), Full Paper, Helsinki, Finland, August, 2015."},
    {key:47,text:"[C] Dong Wang, Chao Huang*. \"Confidence-Aware Truth Estimation in Social Sensing Applications,\" The 12th Annual IEEE International Conference on Sensing, Communication, and Networking (SECON 15), Full Paper, Seattle, WA, June, 2015. (Acceptance rate: 28%)"},
    {key:48,text:"[W] Dong Wang. \"Data Reliability Challenge of Future Cyber-Physical Systems for Smart Cities,\" 2015 NSF Early-Career Investigators Workshop on CPS and Smart City, Invited Paper, Seattle, WA, April, 2015."},
    {key:49,text:"[J] Dong Wang, Tarek Abdelzaher, and Lance Kaplan. \"Surrogate Mobile Sensing,\" IEEE Communications Magazine, Volume:52, Issue:8, 2014."},
    {key:50,text:"[J] Dong Wang, Tanvir Amin, Tarek Abdelzaher, Dan Roth, Clare Voss, Lance Kaplan, Stephen Tratzy, Jamal Laoudiy, and Douglas Briesch. \"Provenance-assisted Classification in Social Networks,\" IEEE Journal of Selected Topics in Signal Processing (J-STSP), Volume:8, Issue:4, 2014."},
    {key:51,text:"[C] Shiguang Wang, Dong Wang, Lu Su, Lance Kaplan, and Tarek Abdelzaher, Towards Cyber-physical Systems in Social Spaces: The Data Reliability Challenge, IEEE Real-time Systems Symposium (RTSS), Rome, Italy, December 2014."},
    {key:52,text:"[C] Md Tanvir Amin, Tarek Abdelzaher, Dong Wang , Boleslaw Szymanski. \"Crowd-sensing with Polarized Sources,\" In Proc. 10th IEEE International Conference on Distributed Computing in Sensor Systems (DCOSS) , Marina Del Rey, CA, May 2014."},
    {key:53,text:"[C] Siyu Gu, Chenji Pan, Hengchang Liu, Shen Li, Shaohan Hu, Lu Su, Shiguang Wang, Dong Wang, Tanvir Amin, Ramesh Govindan, Charu Aggarwal, Raghu Ganti, Mudhakar Srivatsa, Amotz Barnoy, Peter Terlecky, Tarek Abdelzaher \"Data Extrapolation in Social Sensing for Disaster Response,\" In Proc. 10th IEEE International Conference on Distributed Computing in Sensor Systems (DCOSS), Marina Del Rey, CA, May 2014."},
    {key:54,text:"[C] Dong Wang, Tanvir Amin, Shen Li, Tarek Abdelzaher, Lance Kaplan, Siyu Gu, Chenji Pan, Hengchang Liu, Charu Aggrawal, Raghu Ganti, XinLei Wang, Prasant Mohapatra, Boleslaw Szymanski, Hieu Le, \"Humans as Sensors: An Estimation Theoretic Perspective,\" The 13th ACM/IEEE International Conference on Information Processing in Sensor Networks (IPSN 14), Berlin, Germany, April, 2014. (Acceptance rate: 20%)"},
    {key:55,text:"[J] Dong Wang, Lance Kaplan, Tarek Abdelzaher, \"Maximum Likelihood Analysis of Conflicting Observations in Social Sensing,\" ACM Transactions on Sensor Networks (ToSN), Vol. 10, No. 2, Article 30, January, 2014."},
    {key:56,text:"[C] Dong Wang, Tarek Abdelzaher, Lance Kaplan, Raghu Ganti, Shaohan Hu and Hengchang Liu, \"Exploitation of Physical Constraints for Reliable Social Sensing,\" IEEE 34th Real-Time Systems Symposium (RTSS 13) Vancouver, Canada, December, 2013. (Acceptance rate: 22%)"},
    {key:57,text:"[C] Dong Wang, Tarek Abdelzaher, Lance Kaplan, and Charu Aggarwal, \"Recursive Fact-finding: A Streaming Approach to Truth Estimation in Crowdsourcing Applications,\" In Proc. 2013 IEEE 33rd International Conference on Distributed Computing Systems (ICDCS 13) Philadelphia, PA, July 2013. (Acceptance rate: 13%)"},
    {key:58,text:"[J] Dong Wang, Lance Kaplan, Tarek Abdelzaher, and Charu Aggarwal, \"On Credibility Estimation Tradeoffs in Assured Social Sensing,\" IEEE Journal On Selected Areas in Communication (JSAC), Vol 31. No. 6, June 2013."},
    {key:59,text:"[C] Hongzhao Huang, Arkaitz Zubiaga, Heng Ji, Hongbo Deng, Dong Wang, Hieu Khac Le, Tarek Abdelzaher, Jiawei Han, Alice Leung, John Hancock and Clare Voss, \"Tweet Ranking based on Heterogeneous Networks,\" in Proc. 24th International Conference on Computational Linguistics, Mumbai, India, December 2012."},
    {key:60,text:"[C] Dong Wang, Lance Kaplan, Tarek Abdelzaher and Charu C. Aggarwal. \"On Scalability and Robustness Limitations of Real and Asymptotic Confidence Bounds in Social Sensing.\" The 9th Annual IEEE Communications Society Conference on Sensor, Mesh and Ad Hoc Communications and Networks (SECON 12) , Seoul, Korea, from June, 2012. (Acceptance rate: 19%)"},
    {key:61,text:"[C] Dong Wang, Lance Kaplan, Hieu Le, and Tarek Abdelzaher. \"On Truth Discovery in Social Sensing: A Maximum Likelihood Estimation Approach.\" The 11th ACM/IEEE Conference on Information Processing in Sensor Networks (IPSN 12) Beijing, China April 2012. (Acceptance rate: 15%)"},
    {key:62,text:"[J] Dong Wang, Tarek Abdelzaher, Bodhi Priyantha, Jie Liu, Feng Zhao, \"Energy-optimal Batching Periods for Asynchronous Multistage Data Processing on Sensor Nodes: Foundations and an mPlatform Case Study,\" Journal of Real-Time Systems Volume 48, Issue 2 (2012), Page 135-165."},
    {key:63,text:"[C] Dong Wang, Tarek Abdelzaher, Hossein Ahmadi, Jeff Pasternack, Dan Roth, Manish Gupta, Jiawei Han, Omid Fatemieh, and Hieu Le, Charu Aggarwal, \"On Bayesian Interpretation of Fact-finding in Information Networks\", 14th International Conference on Information Fusion (Fussion 11) Chicago, IL, July, 2011."},
    {key:64,text:"[C] Dong Wang, Hossein Ahmadi, Harsha Chenji, Tarek Abdelzaher, Radu Stoleru, C. C. Aggarwal \"Optimizing Quality-of-Information in Cost-sensitive Sensor Data Fusion\", 7th IEEE International Conference on Distributed Computing in Sensor Systems, Barcelona (DCoSS 11) Spain, June 2011. (Acceptance rate: 28%)"},
    {key:65,text:"[W] Dong Wang, Tarek Abdelzaher, Lance Kaplan, and Charu C. Aggarwal. \"On Quantifying the Accuracy of Maximum Likelihood Estimation of Participant Reliability in social sensing\". 8th International Workshop on Data Management for Sensor Networks (DMSN11) in Conjunction with VLDB , Seattle, WA, August 2011."},
    {key:66,text:"[C] Qing Cao, Dong Wang, Tarek Abdelzaher, Bodhi Priyantha, Jie Liu, Feng Zhao, \"Energy-optimal Batching Periods for Asynchronous Multistage Data Processing on Sensor Nodes: Foundations and an mPlatform Case Study\", 16th IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS 2010) Stockholm, Sweden, April, 2010 (Best Paper Award) ."},
    {key:67,text:"[C] Qing Cao, Dong Wang, Tarek Abdelzaher, \"End-User Diagnosis of Communication Paths in Sensor Network Systems\". The 38th International Conference on Parallel Processing (ICPP-2009) (Acceptance rate: 32%)"},
    {key:68,text:"[W] Jin Heo, Praveen Jayachandran, Insik Shiny, Dong Wang, and Tarek Abdelzaher \"OptiTuner: An Automatic Distributed Performance Optimization Service and a Server Farm Application\" , FeBID: Fourth International Workshop on Feedback Control Implementation and Design in Computing Systems and Networks 2009."},
    {key:69,text:"[J] Jianwei Wang, Dong Wang, TIMO Korhonen, Yuping Zhao, \"A Novel Anti-Collision Protocol in Multiple Readers RFID Sensor Networks\", Chinese Journal of Sensors and Actuators, Vol.21 No.8, 2008"},
    {key:70,text:"[J] Dong Wang, Zimin Liu, Yuping Zhao, Yan Luo, \"An Efficient Multiplexing Scheme to Improve the Capacity of VoWLAN\", Journal of Peking University, Vol. 1 No. 3, Sept. 30, 2006"},
    {key:71,text:"[C] Dong Wang, Zimin Liu, Yuping Zhao, Yan Luo, \"A Novel Unicast Multiplexing Scheme to Guarantee the QoS of VoWLAN\" , IEEE GLOBECOM Conference, Nov.27-Dec.1, 2006 , San Francisco, USA"},
    {key:72,text:"[C] Dong Wang, Jianwei Wang Yuping Zhao, \"A Novel Solution to the Reader Collision Problem in RFID System\", IEEE 2nd International Conference on Wireless Communications, Networking and Mobile Computing, Sept.22-24, 2006, WuHan China"},
    {key:73,text:"[C] Jianwei Wang, Dong Wang, Yuping Zhao, \"A Novel Anti-Collision Algorithm with Dynamic Tag Number Estimation\", IEEE International Conference on Communication Technology, Nov. 27-30, 2006, Gulin, China"},
    {key:74,text:"[C] Jianwei Wang, Dong Wang, Yuping Zhao, \"Multi-path Combining Scheme for ISI Suppression in DS UWB System\", IEEE 2nd International Conference on Wireless Communications, Networking and Mobile Computing, Sept. 22-24, 2006, WuHan China"},
    {key:75,text:"[J] Dong Wang, Kun Qiu, Licun Wang, \"A New DBA Algorithm in EPON Upstream Channel in support of SLA\", Journal on Communications of China, Vol. 26 No. 6, June, 2005"},
    {key:76,text:"[J] Dong Wang, Kun Qiu, Kicun Wang, \"A QoS supportive MAC Design in EPON System\", Journal of University of Electronic Scince and Techonlogy of China, Vol.33 No.6, Dec, 2004"},
    {key:77,text:"[J] Licun Wang, Kun Qiu, Dong Wang, \"Design of MAC of Fixed Frame Size of EPON\", Journal of University of Electronic Scince and Techonlogy of China , Vol.33 No.6, Dec, 2004"},
  ],
  2: [
    {key:1,text:"Google Faculty Research Award: Google: Spring 2018"},
    {key:2,text:"Young Investigator Program Award (YIP): Army Research Office (ARO): Fall 2017"},
    {key:3,text:"Wing Kai Cheng Fellowship: University of Illinois at Urbana Champaign: Fall 2012"},
    {key:4,text:"Best Paper Award: 16th IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS), Stockholm, Sweden: April 2010"},
    {key:5,text:"Outstanding EECS Graduate Research Award: Peking University: July 2007"},
    {key:6,text:"Best Graduate Research Award: Peking University: April 2007"},
    {key:7,text:"Graduate Innovative Research Award: Peking University: October 2006"}
  ],
  3: [
    {key:1,text:"Fall 2018: Computer Networks"},
    {key:2,text:"Spring 2018: Social Sensing and Cyber-Physical Systems"},
    {key:3,text:"Fall 2017:Computer Networks"},
    {key:4,text:"Spring 2017: Social Sensing and Cyber-Physical Systems"},
    {key:5,text:"Fall 2016: Computer Networks"},
    {key:6,text:"Spring 2016: Social Sensing and Cyber-Physical Systems"},
    {key:7,text:"Fall 2015: Computer Networks"},
    {key:8,text:"Spring 2015: Social Sensing and Cyber-Physical Systems"},
    {key:9,text:"Fall 2014: Cloud Computing"}
  ],
  4: [
    {key:0,text:"Steering Committee Member of Second International Workship on Social Sensing (SocialSens 2017)"},
    {key:1,text:"TPC Chair of First International Workshop on Social  Sensing (SocialSens 2015)"},
    {key:2,text:"TPC member of ACM/IEEE ICCPS 2018,ACMIEEE IPSN 2017,2018, IEEE IoTDI  2017,  2018, IEEE CPSCom 2016"},
    {key:3,text:"TPC member of ACM KDD 2015, 2016, IEEE ICDM 2015, CIKM 2015"},
    {key:4,text:"TPC member of  IEEE International Conference on Big Data Science and engineering (BDSE 2013, 2015)"},
    {key:5,text:"TPC member of IEEE DCoSS 2016, CloudCom 2013"},
    {key:6,text:"TPC member of International Conference on Computing, Networking and Communications (ICNC 2014, 2015)"},
    {key:7,text:"Reviewer of IEEE Communications Magazine"},
    {key:8,text:"Reviewer of ACM Transactions on Sensor Networks (ToSN)"},
    {key:9,text:"Reviewer of ACM Transactions on Internet of Things (IOIT)"},
    {key:10,text:"Reviewer of ACM Transactions on Internet Technology (TOIT)"},
    {key:11,text:"Reviewer of Transactions on Autonomous and Adaptive Systems (TAAS)"},
    {key:12,text:"Reviewer of Pervasive and Mobile Computing (PMC)"},
    {key:13,text:"Reviewer of Elsevier Computer Communications"},
    {key:14,text:"Reviewer of KSII Transactions on Internet and Information Systems"},
    {key:15,text:"Reviewer of Security and Communication Networks"},
    {key:16,text:"Reviewer of Infocom 14, Milcom 14"}
  ]
};


class App extends Component {

  state = {tabLocator:0,returnObject:null};

  renderData(){
    let renderObj = [];
    if (this.state.tabLocator===0){
      renderObj.push(
        <div>
          <div className="App-bio-top-container" style={{backgroundColor:'white'}}>
            <img src="https://www3.nd.edu/~dwang5/pic/dong1b.jpg" width="150" height="150" alt="Dr. Wang"/>
            <div className= "App-bio-top-text" style={{height:"80%"}}>
              <p style={{fontSize:'17px'}}>Ph.D.</p>
              <p style={{fontSize:'17px'}}>Assistant Professor</p>
              <p style={{fontSize:'17px'}}>Department of Computer Science and Engineering Interdisciplinary Center</p>
              <p style={{fontSize:'17px'}}>for Network Science and Applications (iCeNSA)</p>
            </div>
            <div className= "App-bio-top-text" style={{height:"80%"}}>
              <p style={{fontSize:'17px'}}>University of Notre Dame</p>
              <p style={{fontSize:'17px'}}>Phone: +1-574-631-3749</p>
              <p style={{fontSize:'17px'}}>Email: dwang5@nd.edu</p>
            </div>
          </div>
          <div className="Title-text-div"  style={{backgroundColor:'white'}}>
              <div className="App-bio-title-container" style={{width:'180px'}}>
                <div className="App-bio-title">
                  <p> Biography </p>
                </div>
              </div>
               <p style={{paddingLeft:10,paddingRight:10,textAlign:'center'}}>I am an assistant professor in the <a href="www.engineering.nd.edu">College of Engineering</a> at the <a href="www.nd.edu">University of Notre Dame </a>, with appointments in the <a href="www.icensa.com">
               Interdisciplinary Center for Network Science and Applications (iCeNSA) </a> and <a href="www.cse.nd.edu">Department of Computer Science and Engineering</a>. I received my Ph.D.
               degree in Computer Science at <a href="www.uiuc.edu">University of Illinois at Urbana Champaign (UIUC)</a> with Professor Tarek F. Abdelzaher. I got my Master's degree in
               Electrical Engineering from <a href="www.english.pku.edu.cn">Peking University (PKU)</a>, and Bachelor degree in Electrical Engineering from <a href="http://www.oice.uestc.edu.cn/en/">University of Electronic
               Science and Technology of China (UESTC)</a>.
              </p>
          </div>
          <div className="Title-text-div"  style={{backgroundColor:'white'}}>
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
        renderObj.push(<div className="Title-text-div"  style={{backgroundColor:'white'}}>{tmpRender}</div>);
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
        renderObj.push(<div className="Title-text-div"  style={{backgroundColor:'white'}}>{tmpRender}</div>);
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
          <div className="App-header-whole">
            <header className="App-header-left">
            	<p>Dong Wang</p>
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
