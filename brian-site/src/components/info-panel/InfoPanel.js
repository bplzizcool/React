import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import InfoCard from '../info-card/InfoCard'
import styles from './InfoPanel.module.css';

const [open, setOpen] = React.useState(false);

const toggleDrawer = (newOpen) => () => {
  setOpen(newOpen);
};


class InfoPanel extends Component {
    render() {
        return (
            <div>
                <Drawer onClick={toggleDrawer(true)} className={styles.drawer} open={open} variant="temporary" classes={{paper: styles.drawerPaper}} anchor="left">
                    <InfoCard></InfoCard>
                </Drawer>
            </div>

        );
    }
}

export default InfoPanel;
