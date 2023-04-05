# room.et
ACT 1st assignment
clone of the a room.et responsive using bootstrap and css
    @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
    *{
      padding: 0;
      margin: 0;
      text-decoration: none;
      list-style: none;
      box-sizing: border-box;
      }
      .carousel slide{
        position: relative;
      }
      .one{
        border-radius:200px;
        position: fixed;
  bottom: 500px;
  opacity: 0.9;
  margin-left: 70px;
  width: 1200px;

      }
      label.logo{
        color:white;
        font-size: 20px;
        line-height: 80px;
        float:left;
        font-weight: bold;
        font-family: 20px lato,sans-serif;
      }
     .one ul{
        float:right;
      
      }
      .one ul li{
       display:inline-block;
       margin-right: 30px;
      }
      .one ul li a{
        color:white;
        font-size:17px;
        text-transform: uppercase;
        text-decoration: none;
        
      }
      button{
       background-color: orangered;
       margin: 10px;
       color: white;
      }
      nav ul li a button{
        color:black;
        font-size:17px;
        text-transform: uppercase;
      }
    .column {
  float: left;
  width: 20%;
  padding: 5px;
}
    .row::after {
  content: "";
  clear: both;
  display: table;
}

.text {
  position: absolute;
  bottom: -480px;
  left: 23.5px;
  height: 300px;
  width: 259px;
  border-radius: 10px;
  background-color: black;
  color: white;
  opacity: 0.7;
  padding-top: 120px;
  padding-left: 65px;
  padding-right: 20px;
}
.box {
  display: flex;
    position: absolute;
  bottom: 10px;
  opacity: 0.9;
  margin-left: 70px;
  width: 1200px;
  
}
.menu-icon{
  width:25px;
  cursor: pointer;
 display: none;
}
@media only screen and (max-width:700px){
  *{
    margin-left: 0px;
  }
  .one ul{
  width:100%;
  background:linear-gradient(white);
  position: absolute;
  top:75px;
  right:0;
  z-index: 2;
  }
  .one ul li{
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;

  }
  .one ul li a{
   color:#fff;

  }
  .menu-icon{
    display:block;
    margin-left: 300px;
    margin-top: 30px;
  }
  #menuList{
    overflow: hidden;
    transition: 0.5s;
  }
  .box .bg{
    box-sizing: border-box;
    width: 50%;
  }
  .box .bg h3{
    margin-left: 0px;
  }
  .box .bg p{
    margin-left: 0px;

  }
   .box .row .col .btn {
margin-left: 30px;
  }
  button{
    margin-left: 30px;
  }
  .box{
   justify-content: left;
    margin-left: 0px;
    width:min-content;
    max-width: 50px;
  }
  footer{
    margin-left: 0px;
  }
}
