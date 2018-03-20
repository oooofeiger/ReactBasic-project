import React from 'react';
import {Row ,Col ,Tabs , Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCImageBlock from './pc_news_image_block';
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
							<PCImageBlock type="国际" count="6" width="400px" cardTitle="国际头条" imageWidth="112px" />
						</div>
						<Tabs class='tabs_news'>
							<TabPane tab='新闻' key='1'>
								<PCNewsBlock width='99%' type='头条' bordered='true' />
							</TabPane>
							<TabPane tab='社会' key='2'>
								<PCNewsBlock width='99%' type='社会' bordered='true' />
							</TabPane>
							<TabPane tab='科学' key='3'>
								<PCNewsBlock width='99%' type='科学' bordered='true' />
							</TabPane>
						</Tabs>
						<div>
							<PCImageBlock type="娱乐" count="8" width="100%" cardTitle="娱乐" imageWidth="132px" />
							<PCImageBlock type="搞笑" count="8" width="100%" cardTitle="搞笑" imageWidth="132px" />
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		)
	}

}
