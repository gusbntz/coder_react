import cart from "../assets/image/cart.png"

const styles = { 
     img: {
         height:"2rem",
         with: "auto",   
  },
  span: {
     color: "white",
     paddingLeft: 10,
  },
}
export const CartWidget = () => (
<>
   <img src= {cart} style={styles.img} alt="changuito" />
   <span style={styles.span}>0</span>
 </>
 )