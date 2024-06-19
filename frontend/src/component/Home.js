
import '../style/Home.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import about_boxes_2 from "../image/about-boxes-2.jpg";
import about_boxes_3 from "../image/about-boxes-3.jpg";
import about_boxes_1 from "../image/about-boxes-1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Chart, registerables } from 'chart.js';
import { useRef, useEffect } from 'react';

Chart.register(...registerables);

export default function Home() {
  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const doughnutChartInstance = useRef(null);

  useEffect(() => {
    if (barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
      const ctxBar = barChartRef.current.getContext('2d');
      barChartInstance.current = new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: ['Free spots', 'Reserved spots', 'Overdue'],
          datasets: [{
            label: 'Parking Status', // Add a label here
            data: [12, 19, 3],
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
          }]
        },
        options: {
          plugins: {
            legend: {
              display: true,
              labels: {
                color: 'white'
              }
            }
          }
        }
      });
    }

    if (doughnutChartRef.current) {
      if (doughnutChartInstance.current) {
        doughnutChartInstance.current.destroy();
      }
      const ctxDoughnut = doughnutChartRef.current.getContext('2d');
      doughnutChartInstance.current = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
          labels: ['Free spots', 'Reserved spots', 'Overdue'],
          datasets: [{
            label: 'Parking Status', // Add a label here
            data: [12, 19, 3],
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
          }]
        },
        options: {
          plugins: {
            legend: {
              display: true,
              labels: {
                color: 'white'
              }
            }
          }
        }
      });
    }
  }, []);


  return (
    <div>
      {/* محتويات الهيدر  */}
      <section className='header'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="header-content">
                <div className="overlay">
                  <div className="header-content-item">
                    <h1>Find Spaces in NO Time</h1>
                   
                    <p className="paragraphone">
                      Here is the best place to ensure that you do not waste your time searching for an empty space in the university's parking garage
                    </p>
                    <a href="#" className="link" data-bs-toggle="modal" data-bs-target="#freeSpotsModal">VIEW FREE SPOTS</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* نافذة منبثقة تحتوي على فيديو */}
      <div className="modal fade" id="freeSpotsModal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title" id="modalTitle">Please wait ...don't be upset </p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* تضمين فيديو داخل جسم النافذة */}
              <video controls width="100%">
                <source src="path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="modal-footer ">
              <button type="button" className="btn btn-primary ms-4" >Show Statistics</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>


      {/* الاحصائيات chart */}
      <div className=' final curved-shape d-flex justify-content-center align-items-center '>
        <section className='statistics '>
          <div className='container'>
            <div className='content'>
              <div className='text'>
                <p className='chartHeading'>These are the parking statistics at this time:</p>
                <p className='chartText'>On our website, we allow you to know the statistics about parking to make it easier for you and to ensure that you do not waste your time</p>
              </div>
              <div className='chart'>
                <canvas ref={doughnutChartRef}></canvas>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* محتويات السيرفسيز */}
      <div className="about-boxes">
        <div className="container my-4">
          <div className="row">
            <div className="col-md-4 my-4 col-lg-4 d-flex align-items-stretch">
              <div className="card">
                <img src={about_boxes_1} className="card-img-top" alt="..." />
                <div className="card-icon">
                  <i className="fa-solid fa-calendar"></i>
                </div>
                <h5 className="card-title">Our Mission</h5>
                <span className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </div>
            </div>
            <div className="col-md-4 my-4 col-lg-4 d-flex align-items-stretch">
              <div className="card">
                <img src={about_boxes_2} className="card-img-top" alt="..." />
                <div className="card-icon">
                  <i className="fa-solid fa-calendar"></i>
                </div>
                <h5 className="card-title">Our Plan</h5>
                <span className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </div>
            </div>
            <div className="col-md-4 my-4 col-lg-4 d-flex align-items-stretch">
              <div className="card">
                <img src={about_boxes_3} className="card-img-top" alt="..." />
                <div className="card-icon">
                  <i className="fa-solid fa-film"></i>
                </div>
                <h5 className="card-title">Our Vision</h5>
                <span className="card-text ms-0">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
