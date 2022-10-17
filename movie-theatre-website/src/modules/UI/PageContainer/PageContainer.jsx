import './PageContainer.scss';

export default function PageContainer(props) {

    const classes = 'pageContainer ' + props.className;
    return <div className={classes}>{props.children}</div>

};
