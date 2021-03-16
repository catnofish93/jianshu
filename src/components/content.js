import React,{Component} from "react"
import './content.css'
import daily from "../static/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
import club from "../static/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
import lianzai from "../static/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
import copyRight from "../static/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
import code from "../static/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
class Content extends Component {
    render() {
        return (
            <div>
                <div className='wrap'>
                    <div>
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
                        <img src={daily} className='adverImage'></img>
                        <img src={club} className='adverImage'></img>
                        <img src={lianzai} className='adverImage'></img>
                        <img src={copyRight} className='adverImage'></img>
                        <div className='download1'>
                            <img src={code} className="qrcode"></img>
                            <div>
                                <div className='title'>下载简书App</div>
                                <div className='description'>随时随地发现和创作内容</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content