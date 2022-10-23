import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "../HomePage/Home";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import AccountPage from "../AccountPage/AccountPage";
import AdminEditProgramPage from '../AdminEditProgramPage/AdminEditProgramPage';
import AdminTheatreEditPage from '../AdminTheatreEditPage/AdminTheatreEditPage';
import AdminTheatresPage from '../AdminTheatresPage/AdminTheatresPage';
import AllMoviesPage from '../AllMoviesPage/AllMovies';
import BookingPage from '../BookingPage/BookingPage';
import ErrorPage from "../ErrorPage/ErrorPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetail";
import SeatsPage from "../SeatsPage/SeatsPage";
import TheatreDetailsPage from '../TheatreDetailPage/TheatreDetail';
import AllTheatresPage from "../TheatresPage/Theaters";
import HeroPage from "../HeroPage/HeroPage";
import { AnimatePresence } from 'framer-motion';

export default function RouterLogic() {
    const location = useLocation();
    return (
        <>  <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="hero" element={<HeroPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="/" element={<Navigate to='hero' replace />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="account" element={<AccountPage />} />
                <Route path="admin/edit-program" element={<AdminEditProgramPage />} />
                <Route path="admin/theatres/:id" element={<AdminTheatreEditPage />} />
                <Route path="admin/theatres" element={<AdminTheatresPage />} />
                <Route path="movies" element={<AllMoviesPage />} />
                <Route path="movies/:id" element={<MovieDetailPage />} />
                <Route path="booking-complete" element={<BookingPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="choose-seats" element={<SeatsPage />} />
                <Route path="theatres" element={<AllTheatresPage />} />
                <Route path="theatres/:id" element={<TheatreDetailsPage />} />
            </Routes>
        </AnimatePresence>
        </>
    )
}