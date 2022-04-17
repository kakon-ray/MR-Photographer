import React from "react";
import { Card, Button } from "react-bootstrap";
import img from "../../images/firebase.png";
const Blog = () => {
  return (
    <div
      className="container py-3 my-3"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div className="py-2 text-center">
        <h1>LATEST BLOG</h1>
        <p className="text-secondary">Hello This is Blog section</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <div className="img-hover-zoom">
              <Card.Img variant="top" src={img} />
            </div>

            <Card.Body>
              <h6>24 February 2021</h6>
              <Card.Title> Authorization and Authentication</Card.Title>
              <Card.Text>
                লগিন বা রেজিস্টেসন করার জন্য যদি নিজের ইনফরমেসন গুলো ব্যাবহার
                করা হয় তাকে অথেনটিকেশন বলে। যেমন Email and Password দিয়ে লগিন বা
                রেজিস্টেসন করা। আর লগিন করার জন্য যদি অন্য কার রিসর্স ব্যাবহার
                করা হয় তাকে Authorization বলে ।যেমন গুগল বা ফেসবুক দিয়ে লগিন
                করা।{" "}
              </Card.Text>
              <Button variant="outline-success">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <div className="img-hover-zoom">
              <Card.Img variant="top" src={img} />
            </div>

            <Card.Body>
              <h6>24 February 2021</h6>
              <Card.Title>Firebase এর প্রয়োজনীয়তা</Card.Title>
              <Card.Text>
                Authentication, Authorization, Realtiem database and Hosting এর
                জন্য ফায়ারবেস ব্যাবহার করা হয়। ফায়ারবেস এর মত কয়েকটি সাইট ঃ
                Parse, Kuzzle এবং Backendless
              </Card.Text>
              <Button variant="outline-success">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <div className="img-hover-zoom">
              <Card.Img variant="top" src={img} />
            </div>

            <Card.Body>
              <h6>24 February 2021</h6>
              <Card.Title>Authentication ছাড়া ফায়ারবেস এর ব্যাবহার </Card.Title>
              <Card.Text>
                Authentication ছাড়া ফায়ারবেস দিয়ে আর হোস্টিং এর কাজ করা যায়।{" "}
              </Card.Text>
              <Button variant="outline-success">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
