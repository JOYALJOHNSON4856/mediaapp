import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

  const navigateByUrl=useNavigate()
  return (
    <>

{/*part1----------------------------------------------------------------------------------*/}

   <Row className='mt-5 align-items-center justify-content-between'>
    <Col></Col>
    <Col lg={5}>
      <h3 style={{textAlign:'justify'}}>Welcome to <span className='text-warning'> media player</span></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cum, dolores fugiat recusandae quis nulla asperiores labore perferendis, minima unde, officiis mollitia doloremque delectus reiciendis molestias. Mollitia dolore aliquid asperiores?</p>
      <button className='btn btn-info' onClick={()=>navigateByUrl("/home")}>Get started</button>
    </Col>
    <Col lg={5} className='p-3'> <img src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" alt="" /></Col>
    <Col></Col>
   </Row>


{/*part2----------------------------------------------------------------------------------*/}

<div className="container my-5 d-flex align-items-center justify-content-between flex-column ">
  <h3>features</h3>
  <div className="cards my-5 d-flex align-items-center justify-content-between w-100">

  <Card className='p-4 bg-info' style={{ width: '18rem' }}>
      <Card.Img height={'200px'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/6190/screenshots/4263671/browserpreview_tmp-1.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='p-4 bg-info' style={{ width: '18rem' }}>
      <Card.Img height={'200px'} width={'300px'} variant="top" src="http://3.bp.blogspot.com/-_-DeyvxP-Y4/UAU-TgiRdvI/AAAAAAAAC1c/T-mjGJ8lYkw/s200/sound-bar.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4 bg-info' style={{ width: '18rem' }}>
      <Card.Img height={'200px'} width={'300px'} variant="top" src="https://www.fcnaustin.com/wp-content/uploads/2018/08/Sound.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

</div>
{/*part3----------------------------------------------------------------------------------*/}

<div className='container border-rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <div className='col-lg-5'>
        <h3 className='mb-3 text-warning'>Simple,Powerful & Fast</h3>
        <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus eligendi natus, distinctio facere cupiditate quaerat illum, voluptates tempore nesciunt, ab molestiae magni voluptas nam sint. Esse nulla ratione natus!</h6>

        <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus eligendi natus, distinctio facere cupiditate quaerat illum, voluptates tempore nesciunt, ab molestiae magni voluptas nam sint. Esse nulla ratione natus!</h6>

        <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus eligendi natus, distinctio facere cupiditate quaerat illum, voluptates tempore nesciunt, ab molestiae magni voluptas nam sint. Esse nulla ratione natus!</h6>
      </div>
      <div className="video" col-lg-5>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ymHZIhsDuH0?si=_JURwrPJd4oN3pOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>




    </>
  )
}

export default LandingPage