import { toast } from "react-toastify";

const Managetool = ({ tool }) => {
  const { _id, name, picture, description, quantity, price } = tool;

  const handleUpdate = (event) => {
    event.preventDefault();
    const addQuantity = parseInt(event.target.addQuantity.value);
    const newQuantity = quantity + addQuantity;

    fetch(`https://assignment12server-lime.vercel.app/tools/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast("Quantity add successful");
          event.target.reset();
        }
      });
  };
  return (
    <div className="container mt-5 w-lg-50">
      <div className="border p-3 m-3 rounded">
        <h4>Name: {name}</h4>
        <img
          style={{ height: "200px" }}
          src={picture}
          className="img-fluid"
          alt="product imgage"
        />
        <h4>Type: {description}</h4>
        <h4>Price: {price} taka</h4>
        <h4>Quantity: {quantity} Unit </h4>
      </div>
      <div className="d-flex mb-2">
        <form onSubmit={handleUpdate} className="w-50 mx-auto text-center">
          <input
            type="text"
            name="addQuantity"
            placeholder="Add Quantity"
            className=" text-center block m-1"
            required
          />

          <input
            type="submit"
            value="Add Quantity"
            className=" block btn btn-primary m-1"
          />
        </form>
      </div>
    </div>

    // <div className='card py-3'>
    //     <h3 className='py-2'> {name}</h3>
    //     <img src={img} alt='Tool' className='img-fluid' />
    //     <h3>Type: {description}</h3>
    //     <h3>Quantity: {quantity} Unit</h3>
    //     <h3>Price: {price} taka/ Unit</h3>
    //     <Button onClick={() => handleUpdate(_id)} className='btn btn-primary border rounded-pill w-50 mx-auto '> Update </Button>

    // </div>
  );
};

export default Managetool;
