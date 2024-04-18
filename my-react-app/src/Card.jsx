import profilepic from './assets/profilepic.png';


function Card(){
return(

    <div className="card">
<img className="card-image" src={profilepic} alt="profile picture"></img>
<h2 classname="card-title">Meta-Zeno</h2>
<p classname="card-text">I make web applications and play games</p>


    </div>
);

}

export default Card