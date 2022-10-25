import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "../HomePage/Home";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import AccountPage from "../AccountPage/AccountPage";
import AllMoviesPage from '../AllMoviesPage/AllMovies';
import BookingPage from '../BookingPage/BookingPage';
import ErrorPage from "../ErrorPage/ErrorPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetail";
import SeatsPage from "../SeatsPage/SeatsPage";
import TheatreDetailsPage from '../TheatreDetailPage/TheatreDetail';
import AllTheatresPage from "../TheatresPage/Theaters";
import HeroPage from "../HeroPage/HeroPage";
import { AnimatePresence } from 'framer-motion';
import { useSelector } from "react-redux";

export default function RouterLogic() {
    const location = useLocation();
    const activeUser = useSelector(state => state.activeUser);

    return (
        <>  <AnimatePresence>
            {activeUser.isLogged ?
                <Routes location={location} key={location.pathname}>
                    <Route path="hero" element={<HeroPage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="/" element={<Navigate to='hero' replace />} />
                    <Route path="account" element={<AccountPage />} />
                    <Route path="movies" element={<AllMoviesPage />} />
                    <Route path="movies/:id" element={<MovieDetailPage />} />
                    <Route path="booking-complete" element={<BookingPage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="choose-seats" element={<SeatsPage />} />
                    <Route path="theatres" element={<AllTheatresPage />} />
                    <Route path="theatres/:id" element={<TheatreDetailsPage />} />
                </Routes> :
                <Routes location={location} key={location.pathname}>
                    <Route path="hero" element={<HeroPage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="/" element={<Navigate to='hero' replace />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="movies" element={<AllMoviesPage />} />
                    <Route path="movies/:id" element={<MovieDetailPage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="theatres" element={<AllTheatresPage />} />
                    <Route path="theatres/:id" element={<TheatreDetailsPage />} />
                </Routes>}
        </AnimatePresence>
        </>
    )
}