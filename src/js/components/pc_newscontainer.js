import React from 'react';
import {Row ,Col ,Tabs , Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCImageBlock from './pc_news_image_block';
import PCProducts from './pc_products';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
	render(){
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};

		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="container">
						<div class="leftContainer">
							<div class="carousel">
								<Carousel {...settings}>
									<div><img src='./src/images/carousel_1.jpg' /></div>
									<div><img src='./src/images/carousel_2.jpg' /></div>
									<div><img src='./src/images/carousel_3.jpg' /></div>
									<div><img src='./src/images/carousel_4.jpg' /></div>
								</Carousel>
							</div>
							<PCImageBlock type="guoji" imgWidth="33.3%" count="6" width="400px" cardTitle="国际头条" imageWidth="112px" />
						</div>
						<Tabs class='tabs_news'>
							<TabPane tab='热门' key='1'>
								<PCNewsBlock width='100%' count={22} type='top' bordered='true' />
							</TabPane>

							<TabPane tab='社会' key='2'>
								<PCNewsBlock width='100%' count={22} type='shehui' bordered='true' />
							</TabPane>
							<TabPane tab='娱乐' key='3'>
								<PCNewsBlock width='100%' count={22} type='yule' bordered='true' />
							</TabPane>
						</Tabs>
						<Tabs class='tabs_product'>
							<TabPane tab='ReactNews 产品' key='1'>
								<PCProducts />
							</TabPane>
						</Tabs>
						<div>
							<PCImageBlock type="guonei" count="10" imgWidth="10%" width="100%" cardTitle="国内" imageWidth="132px" />
							<PCImageBlock type="keji" count="20" imgWidth="10%" width="100%" cardTitle="娱乐" imageWidth="132px" />
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		)
	}

}
