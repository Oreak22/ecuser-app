import hero from "../image/Hero.png"
import addie from "../image/addide_store.png"
import supermarket from "../image/supermart_store.png"
import shoprite from "../image/shoprite_store.png"
import delis from "../image/delis_store.png"
const Body =()=>{
    return(
        <>
        <section className="bgd bod row px-5">
            <div className="py-4 px-5 text-light col-6">
                <link></link>
                <p className=" w-100"><h1>Get your groceries <br /> delivered same-day</h1></p>
                <p className="my-5 poder"><h5>Order what you want from grocery stores and local market near you and get it delivered right to your door.</h5></p>
                <p className="addres py-2 px-1 my-5"><input type="text" placeholder="Enter your address" className="my-1" /> <strong><i className=" btn btn-danger icodag text-dark px-3 py-2"><ion-icon name="arrow-round-forward"></ion-icon></i></strong></p>
            </div>
            <div  className=" px-5 text-light col-6 md-none"><img src={hero} alt="" /></div>
        </section>
        <section className=" text-dark mx-5">
        <center>
            <p className="display-4 py-5">Favorite stores in Lagos</p>
        </center>
            <div className="row mx-5">
                <div className="col-3  btn">
                    <p><img src={shoprite} alt="" /></p>
                    <h4 className="mx-0 px-0" >Shoprite</h4>
                    <p className="m-3 poder">Delivery.Pickup</p>
                </div>
                <div className="col-3  btn">
                <p><img src={addie} alt="" /></p>
                    <h4 className="mx-0 px-0" >Addie</h4>
                    <p className="m-3 poder">Delivery.Pickup</p>
                </div>
                <div className="col-3  btn">
                    <p><img src={delis} alt="" /></p>
                    <h4 className="mx-0 px-0" >Delis</h4>
                    <p className="m-3 poder">Delivery.Pickup</p>
                </div>
                <div className="col-3  btn">
                    <p><img src={supermarket} alt="" /></p>
                    <h4 className="mx-0 px-0" >Supermarket</h4>
                    <p className="m-3 poder">Delivery.Pickup</p>
                </div>
            </div>
        </section>
          <section className="bgd m-0 py-5 w-100 text-light">
               <center>
                 <h5 className="py-2">GROCERIES DELIVERED CONVENIENTLY</h5>
                 <h2 className="my-4">Fresh groceries, everyday essentials and more <br /> delivered to your home by friendly, reliable, <br /> and convenient shoppers.</h2>
               </center>
            </section>
            <section>
                <center className="my-5"><h3>Grocery shopping done right</h3></center>
               <center>
               <div className="row mx-5 px-5">
                    <div className="col-4 btn" >
                        <div className="my-3"><h2>Choose what you want</h2></div>
                        <img src={addie} alt="" />
                    </div>
                    
                    <div className="col-4 btn mx-0">
                        <div className="my-3"><h2>Get real-time updates</h2></div>
                        <img src={addie} alt="" />
                    </div>

                    <div className="col-4 btn">
                        <div className="my-3"><h2>Same-day grocery delivery</h2></div>
                        <img src={addie} alt="" />
                    </div>
                </div>
               </center>
               <center className="my-5 ">
                <h3 className="my-3">Shop on the go</h3>
                <h5 className="poder">Get the best Shopascart experience all in one app.</h5>
                <h3 className="my-3"><button className="btn"><img src={addie} alt="" /></button> <button className="btn"> <img src={addie} alt="" /></button></h3>
               </center>
               <center className="my-5 text-light ">
                    <h6>SHOPASCART+</h6>
                    <h2 className="text-danger my-3">The best way to save money on grocery shopping</h2>
                    <p className="text-dark">Choose a plan that fits your shopping needs and get started.</p>
                    <div className="spec bgd w-50 py-5 my-3">
                        <h1 className="my-4 ">Shopascart Plus</h1>
                        <h6 className=" poder">Unlimited delivery on orders over ₦5000</h6>
                        <button className="btn btn-light px-5 my-4"> Get Shopascart Plus</button>
                    </div>
                    <h6 className="poder text-dark">Deliveries under ₦5000 with or without a Shopascart+ membership will incur a ₦1800 fee <br />
                     and applicable taxes and service fees per order.</h6>
               </center>
            </section>
            <section className="m-5 p-5">
                <center className="m-5"><h1>FAQ</h1><h6>Have a question?we're here to help.</h6></center>


                <div className="my-3 py-3 px-0 faq d-flex "><h2 className="btn"> <h3> How does Shopascart work?</h3></h2><h1>+</h1></div>
                <div className="my-3 py-3 px-0 faq d-flex "><h2 className="btn"> <h3> How do I become a Shopascart Shopper</h3></h2><h1>+</h1></div>
                <div className="my-3 py-3 px-0 faq d-flex "><h2 className="btn"> <h3> Why is Shopascart not available in my area</h3>?</h2><h1>+</h1></div>
                <div className="my-3 py-3 px-0 faq d-flex "><h2 className="btn"> <h3> ?How do I pay for my order?</h3></h2><h1>+</h1></div>
                <div className="my-3 py-3 px-0 faq d-flex "><h2 className="btn"> <h3> What happens if something is out of stock?</h3></h2><h1>+</h1></div>
                <div className="my-3 py-3 px-0 faq d-flex "><h2 className="btn"> <h3> Is there a limit to the amount of orders I can place in a day?</h3></h2><h1>+</h1></div>
            </section>
        </>
    )
}
export default Body 