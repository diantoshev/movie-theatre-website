import { NavLink } from "react-router-dom";
import DarkButton from "../Buttons/DarkButton";
import GoldContainer from '../GoldContainer/GoldContainer';
import { BsGear } from 'react-icons/bs';
import './AdminPanel.scss';

function AdminPanel() {
    return (
        <GoldContainer className='py-3 my-3 container-lg rounded-2'>
            <div className="mx-4 container-lg d-flex justify-content-center gap-5 flex-wrap align-items-center">
                <h2 className="mr-4 text-nowrap"> <BsGear /> Admin tools </h2>
                <div className="d-flex justify-content-between gap-5 flex-wrap align-items-center">
                    <NavLink to='/theatres'><DarkButton className="text-nowrap">Edit Theatres</DarkButton></NavLink>
                    <NavLink to='/movies'><DarkButton className="text-nowrap">Edit Movies</DarkButton></NavLink>
                </div>
            </div>
        </GoldContainer>
    );
}

export default AdminPanel;