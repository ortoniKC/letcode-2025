import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { FakeStoreProvider } from "@/context/FakeStoreContext";

// Layout & Common
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Main pages
import MainPage from "@/pages/main/MainPage";
import ContactPage from "@/pages/main/ContactPage";
import WorkspacePage from "@/pages/main/WorkspacePage";
import NotFoundPage from "@/pages/main/NotFoundPage";
import ResumeBuilderPage from "@/pages/tools/ResumeBuilderPage";

// Practice pages
import EditPracticePage from "@/pages/practice/EditPracticePage";
import ButtonPracticePage from "@/pages/practice/ButtonPracticePage";
import DropdownPracticePage from "@/pages/practice/DropdownPracticePage";
import AlertPracticePage from "@/pages/practice/AlertPracticePage";
import FramePracticePage from "@/pages/practice/FramePracticePage";
import FrameUiPage from "@/pages/practice/FrameUiPage";
import InnerframePage from "@/pages/practice/InnerframePage";
import RadioPracticePage from "@/pages/practice/RadioPracticePage";
import WindowPracticePage from "@/pages/practice/WindowPracticePage";
import GithubSearchPage from "@/pages/practice/GithubSearchPage";
import DraggablePage from "@/pages/practice/DraggablePage";
import DroppablePage from "@/pages/practice/DroppablePage";
import SortablePage from "@/pages/practice/SortablePage";
import SelectablePage from "@/pages/practice/SelectablePage";
import SliderPage from "@/pages/practice/SliderPage";
import WaitsPage from "@/pages/practice/WaitsPage";
import TablePracticePage from "@/pages/practice/TablePracticePage";
import AdvTablePage from "@/pages/practice/AdvTablePage";
import CalendarPage from "@/pages/practice/CalendarPage";
import FormsPage from "@/pages/practice/FormsPage";
import FilePage from "@/pages/practice/FilePage";
import ShadowPage from "@/pages/practice/ShadowPage";

// Products pages
import OrtoniProductPage from "@/pages/products/OrtoniProductPage";
import LetxpathProductPage from "@/pages/products/LetxpathProductPage";
import PlaywrightRunnerProductPage from "@/pages/products/PlaywrightRunnerProductPage";

// Courses pages
import CoursesMainPage from "@/pages/courses/CoursesMainPage";
import CourseDetailPage from "@/pages/courses/CourseDetailPage";
import VideoDetailPage from "@/pages/courses/VideoDetailPage";

// Grooming & Quiz pages
import InterviewPage from "@/pages/grooming/InterviewPage";
import TestPracticePage from "@/pages/grooming/TestPracticePage";
import PlaywrightQuizPage from "@/pages/quiz/PlaywrightQuizPage";

// Fake Store pages
import FakeStoreHomePage from "@/pages/fakestore/FakeStoreHomePage";
import FakeStoreProductDetailPage from "@/pages/fakestore/FakeStoreProductDetailPage";
import FakeStoreCartPage from "@/pages/fakestore/FakeStoreCartPage";
import FakeStoreLoginPage from "@/pages/fakestore/FakeStoreLoginPage";

// Main Layout wrapping standard routes
const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export const App: React.FC = () => {
  return (
    <FakeStoreProvider>
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
          {/* Standalone pages (Loaded in iframe, no app shell) */}
          <Route path="frameui" element={<FrameUiPage />} />
          <Route path="innerframe" element={<InnerframePage />} />

          {/* Standard pages with app shell */}
          <Route path="/" element={<MainLayout />}>
            {/* Main paths */}
            <Route index element={<MainPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="test" element={<WorkspacePage />} />
            <Route path="resume-builder" element={<ResumeBuilderPage />} />

            {/* Practice paths */}
            <Route path="edit" element={<EditPracticePage />} />
            <Route path="button" element={<ButtonPracticePage />} />
            <Route path="dropdowns" element={<DropdownPracticePage />} />
            <Route path="alert" element={<AlertPracticePage />} />
            <Route path="frame" element={<FramePracticePage />} />
            <Route path="radio" element={<RadioPracticePage />} />
            <Route path="window" element={<WindowPracticePage />} />
            <Route path="elements" element={<GithubSearchPage />} />
            <Route path="draggable" element={<DraggablePage />} />
            <Route path="droppable" element={<DroppablePage />} />
            <Route path="sortable" element={<SortablePage />} />
            <Route path="selectable" element={<SelectablePage />} />
            <Route path="slider" element={<SliderPage />} />
            <Route path="waits" element={<WaitsPage />} />
            <Route path="table" element={<TablePracticePage />} />
            <Route path="advancedtable" element={<AdvTablePage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="file" element={<FilePage />} />
            <Route path="shadow" element={<ShadowPage />} />

            {/* Products paths */}
            <Route path="product/ortoni-report" element={<OrtoniProductPage />} />
            <Route path="product/letxpath" element={<LetxpathProductPage />} />
            <Route path="product/playwright-runner" element={<PlaywrightRunnerProductPage />} />

            {/* Courses paths */}
            <Route path="courses" element={<CoursesMainPage />} />
            <Route path="course/:id" element={<CourseDetailPage />} />
            <Route path="video/:link" element={<VideoDetailPage />} />

            {/* Grooming & Quiz paths */}
            <Route path="interview" element={<InterviewPage />} />
            <Route path="test-practice" element={<TestPracticePage />} />
            <Route path="pw-quiz" element={<PlaywrightQuizPage />} />

            {/* Fake Store paths */}
            <Route path="home" element={<FakeStoreHomePage />} />
            <Route path="product/:id" element={<FakeStoreProductDetailPage />} />
            <Route path="cart" element={<FakeStoreCartPage />} />
            <Route path="login" element={<FakeStoreLoginPage />} />

            {/* Not Found fallback */}
            <Route path="not-found" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FakeStoreProvider>
  );
};

export default App;
