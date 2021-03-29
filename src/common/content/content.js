import React,{Component} from "react"
import './content.css'
import daily from "../../static/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
import club from "../../static/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
import lianzai from "../../static/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
import copyRight from "../../static/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
import code from "../../static/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            download1: false
        }
    }
    toDetail() {
        this.props.router.push('/view/detail')
    }
    download1Focus() {
        this.setState({
            download1: true
        })
    }
    download1out() {
        this.setState({
            download1: false
        })
    }
    render() {
        return (
            <div>
                <div className='wrap'>
                    <div>
                        <div className='infoList' onClick={this.toDetail.bind(this)}>
                            <div className='name'>小姑子的儿子和我长得一模一样，偷偷做亲子鉴定后，我彻底崩溃</div>
                            <div className='detail'>我和老公是大学同学，他的父亲去世早，他和妹妹都是婆婆一手带大的，抱着穷养儿子富养女的观念，婆婆从小就对老公严加管教，对小姑子就相对宽容了太多。小...</div>
                            <div className='operator'>
                                <div className='diamond'><span className="iconfont diamond">&#xe728;</span>13.4</div>
                                <div className='author'>风之色彩2019</div>
                                <div className='comment'><span className="iconfont diamond">&#xe728;</span>2</div>
                                <div className='like'><span className="iconfont diamond">&#xe728;</span>60</div>
                            </div>
                        </div>
                        <div className='infoList'>
                            <div className='name'>小姑子的儿子和我长得一模一样，偷偷做亲子鉴定后，我彻底崩溃</div>
                            <div className='detail'>我和老公是大学同学，他的父亲去世早，他和妹妹都是婆婆一手带大的，抱着穷养儿子富养女的观念，婆婆从小就对老公严加管教，对小姑子就相对宽容了太多。小...</div>
                            <div className='operator'>
                                <div className='diamond'><span className="iconfont diamond">&#xe728;</span>13.4</div>
                                <div className='author'>风之色彩2019</div>
                                <div className='comment'><span className="iconfont diamond">&#xe728;</span>2</div>
                                <div className='like'><span className="iconfont diamond">&#xe728;</span>60</div>
                            </div>
                        </div>
                        <div className='infoList'>
                            <div className='name'>小姑子的儿子和我长得一模一样，偷偷做亲子鉴定后，我彻底崩溃</div>
                            <div className='detail'>我和老公是大学同学，他的父亲去世早，他和妹妹都是婆婆一手带大的，抱着穷养儿子富养女的观念，婆婆从小就对老公严加管教，对小姑子就相对宽容了太多。小...</div>
                            <div className='operator'>
                                <div className='diamond'><span className="iconfont diamond">&#xe728;</span>13.4</div>
                                <div className='author'>风之色彩2019</div>
                                <div className='comment'><span className="iconfont diamond">&#xe728;</span>2</div>
                                <div className='like'><span className="iconfont diamond">&#xe728;</span>60</div>
                            </div>
                        </div>
                        <div className='infoList'>
                            <div className='name'>小姑子的儿子和我长得一模一样，偷偷做亲子鉴定后，我彻底崩溃</div>
                            <div className='detail'>我和老公是大学同学，他的父亲去世早，他和妹妹都是婆婆一手带大的，抱着穷养儿子富养女的观念，婆婆从小就对老公严加管教，对小姑子就相对宽容了太多。小...</div>
                            <div className='operator'>
                                <div className='diamond'><span className="iconfont diamond">&#xe728;</span>13.4</div>
                                <div className='author'>风之色彩2019</div>
                                <div className='comment'><span className="iconfont diamond">&#xe728;</span>2</div>
                                <div className='like'><span className="iconfont diamond">&#xe728;</span>60</div>
                            </div>
                        </div>
                    </div>
                    <div className='adver'>
                        <img src={daily} className='adverImage' alt='图片丢失'></img>
                        <img src={club} className='adverImage' alt='图片丢失'></img>
                        <img src={lianzai} className='adverImage' alt='图片丢失'></img>
                        <img src={copyRight} className='adverImage' alt='图片丢失'></img>
                        <div className='download1' onMouseEnter={this.download1Focus.bind(this)} onMouseLeave={this.download1out.bind(this)}>
                            <img src={code} className="qrcode" alt='图片丢失'></img>
                            <div>
                                <div className='title'>下载简书App</div>
                                <div className='description'>随时随地发现和创作内容</div>
                            </div>
                            {this.state.download1?
                                <div className='bigqrcodewrap'>
                                    <img src={code} className="bigqrcode" alt='图片丢失' />
                                </div>
                                :''
                            }

                            <div className='arror'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content