import React,{useEffect,useState} from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';


 

 function App() {

    const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch('https://api.github.com/users/Nisarg11/repos')
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

 
  
  
  
  
  return (
    <div>
    <table align="center" >
        <tr>
            <td  align="right"><b>Fachra Nisarg</b></td>
        </tr>
        <tr>
            <td  align="right">22|Male</td>
        </tr>
        <tr>
            <td  align="right">B.E. in Computer Engineering </td>
        </tr>
        <tr>
            <td  align="right">9714234349|nisarg.fachra@gmail.com</td>
        </tr>
        <tr>
            <td><hr/></td>
        </tr>
        <tr>
            <td  align="left" bgcolor="sky blue">Career Objective</td>
        </tr>
        <tr>
            <td>
            </td>
        </tr>
        <tr>
            <td align="left">To secure a job in the industry for the skill development and to work in a challenging environment where I can put my best efforts for the
                respective company. To explore the new different technologies and implementing it.</td>
        </tr>
        <tr>
            <td>
            </td>
        </tr><tr>
            <td>
            </td>
        </tr>
        <tr>
            <td><hr/></td>
        </tr>
        <tr>
            <td  align="left" bgcolor="sky blue">Technical Skills</td>
        </tr>
        <tr>
            <td>
            </td>
        </tr>
        <tr>
            <td align="left">Programming Language and Frameworks: Java, PHP, CodeIgniter<br/><br/>
                CMS: Wordpress<br/><br/>
                Markup Language: HTML CSS, Bootstrap<br/><br/>
                Database Language: SQL<br/><br/>
                Other Development Tools: Postman, Git, Composer, Github.</td>
        </tr>
        <tr>
            <td>
            </td>
        </tr>
        <tr>
            <td><hr/></td>
        </tr>
        <tr>
            <td  align="left" bgcolor="sky blue">Academic Achievements</td>
        </tr>
    </table>

    <table  align = "center" class="Academic" width="100%">
            <tr>
                <th>Year</th>
                <th>Degree</th>
                <th>School/College</th>
                <th>Board/University</th>
                <th>Percentage/CGPA</th>
            </tr>
            <tr>
                <td>2019</td>
                <td>B.E. in Computer Engineering</td>
                <td>V.V.P Engineering College</td>
                <td>Gujarat Technological University</td>
                <td>7.18</td>
            </tr>
            <tr>
                <td>2015</td>
                <td>12th Higher Secondary Examination</td>
                <td>Shri P.V Modi School</td>
                <td>Gujarat Board</td>
                <td>67%</td>
            </tr>
            <tr>
                <td>2013</td>
                <td>10th Secondary Examination</td>
                <td>G. K. Dholakiya</td>
                <td>Gujarat Board</td>
                <td>80%</td>
            </tr>
           </table>
           <table align="left" width="100%">
           <tr>
            <td>
                <ul>
                <li>Merit scholarship 9000Rs from College in the 1st year.</li>
                <li>Secured 5th rank in International Chess Competition Held at DAIICT.
                </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td></td>
        </tr>
        <tr>
            <td><hr/></td>
        </tr>
        <tr>
            <td  align="left" bgcolor="sky blue" >Experience</td>
        </tr>
        <tr>
            <td></td>
        </tr>
        <tr>
            <td><ul>
                <li>Six Months Internship at Squareneed Technologies Rajkot as a Web developer.</li>
            </ul></td>
        </tr>
        <tr>
            <td>

            </td>
        </tr>
        <tr>
            <td><hr/></td>
        </tr>
        <tr>
         <td  align="left" bgcolor="sky blue" >Academic Work</td>
        </tr>
    </table>
        <table align = "center" class="Work">
            <tr>
                <td>Project</td>
                <td><div id="project">
                
                
                <ListLoading isLoading={appState.loading} repos={appState.repos} />  

                </div>
                   
                </td>
            </tr>
            <tr>
                <td>Workshop/Seminars</td>
                <td><ul>
                    <li>Oracle Database Workshop at College.</li>
                    <li>Wordpress Workshop at College.</li>
                    <li>Entrepreneurship Workshop at College.</li>
                </ul></td>
            </tr>
            <tr>
                <td>Mooc</td>
                <td><ul>
                    <li>Six Ways MooC: Introduction to Student Startup.</li>
                </ul></td>
            </tr>
            </table>


            <table align="left" width="100%" >
            <tr>
                <td></td>
            </tr>
            <tr>
                <td><hr/></td>
            </tr>
            <tr>
                <td align="left" bgcolor="sky blue">Positions of Responsibility </td>
            </tr>
            <tr>
                <td><ul>
                    <li>Coordinator in an event during College Tech-fest</li>
                    <li>Volunteer Member in decoration department ZonalTech-fest in the college.</li>
                </ul></td>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <td><hr/></td>
            </tr>
            <tr>
                <td align="left" bgcolor="sky blue">Co-curricular Activities</td>
            </tr>
            <tr>
                <td><ul>
                    <li>Blood donation in College Campus</li>
                    <li>Participation in Chess Indoor sports Competition.</li>
                    <li>Active Participation in other Tech-fest events and school project fairs.</li>
                </ul></td>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <td><hr/></td>
            </tr>
            <tr>
                <td align="left" bgcolor="sky blue">Personal Vitae</td>
            </tr>
            <tr>
                <td><ul>
                    <li><b>Areas of Interest</b>: Football, Movies, Cricket.</li>
                    <li><b>Strength</b>: Communication Skills, Adaptive Nature.
                    </li>
                    <li><b>Languages Known</b>: Gujarati, English, Hindi</li>
                </ul></td>
            </tr>

        </table>
    </div>       
    
  );
}


export default App;

