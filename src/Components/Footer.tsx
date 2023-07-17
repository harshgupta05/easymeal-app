import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" /> */}
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <p className={styles.motto}>
          We’re big food-lovers. And by big, we mean huge. So when it comes to the pizza we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.  </p>
          <p className={styles.motto}>A refreshing mix of seasonal fruits served with a honey-lime dressing.Fresh tomatoes, mozzarella cheese, and basil with a drizzle of balsamic glaze.</p>
          <p className={styles.motto}>Asli Garam Masala | Original Tandoori Chicken Masala | Shandaar Butter Chicken Masala | Khansama Biryani Masala | Classic Chicken Masala | Classic Meat Masala | Chatpata Fish Fry Masala | Dakshin Pepper Fry Masala.</p>
        </div>
        
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
          <p className={styles.text}>
          Made with {'\u2764'} by Harsh Gupta
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
