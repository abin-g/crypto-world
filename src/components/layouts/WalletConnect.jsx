import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/icon/icon-1.svg'
import img4 from '../../assets/images/icon/icon-4.svg'
import img5 from '../../assets/images/icon/icon-5.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WalletConnect = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: 'Meta Mask',
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
                class: ''
            },

            {
                img: img4,
                title: 'Wallet Connect',
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
                class: ''
            },
            {
                img: img5,
                title: 'Coinbase Wallet',
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
                class: ''
            },

        ]
    )


    const connectwallet = event => {
        const walletcheck = event.target.dataset;
        if (walletcheck.wallet === "Meta Mask") {
            if (typeof window.ethereum !== 'undefined') {
                window.ethereum.request({ method: 'eth_requestAccounts' })
                    .then(res => {
                        sessionStorage.setItem("Wallet Address", res);
                    })
            } else {
                window.location.assign("https://metamask.io/")
            }
        } else if (walletcheck.wallet === "Wallet Connect") {
            toast("Wallet Connect Not Enabled");
        } else if (walletcheck.wallet === "Coinbase Wallet") {
            toast("Coinbase Not Enabled");
        }

    }

    return (
        <section className="tf-section connect-wallet">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading">
                            <h3>Wallet- Connect</h3>
                            <p className="desc">Most popular gaming digital nft market place </p>
                            <ToastContainer />
                        </div>
                    </div>
                    {
                        data.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-4">
                                <div className={`sc-wallet ${item.class}`}>
                                    <div className="icon">
                                        <img data-wallet={item.title} onClick={connectwallet} src={item.img} alt="Maximo" />
                                    </div>
                                    <div className="content">
                                        <h4><Link to="#" data-wallet={item.title} onClick={connectwallet}>{item.title}</Link></h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};



export default WalletConnect;
