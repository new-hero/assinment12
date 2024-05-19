import auth from "../../firebase.init";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const [role, setRole] = useState("user");
  useEffect(() => {
    fetch(`https://assignment12server-lime.vercel.app/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data?.role));
  }, [user]);

  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-4"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Essential Tools
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/protfolio">
                Protfolio
              </Nav.Link>
              {role === "admin" && (
                <Nav.Link className="text-light" as={Link} to="/manage">
                  Manage Tools
                </Nav.Link>
              )}
              {role === "admin" && (
                <Nav.Link className="text-light" as={Link} to="/addTool">
                  Add Tool
                </Nav.Link>
              )}
            </Nav>

            <Nav className="ms-auto">
              {user ? (
                <Nav>
                  <Nav.Link className="text-light" as={Link} to="/dashbord">
                    Dashbord
                  </Nav.Link>

                  <Button onClick={handleLogout}>Sign out</Button>
                  <span>{user.displayName}</span>
                </Nav>
              ) : (
                <Nav.Link className="text-light" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
