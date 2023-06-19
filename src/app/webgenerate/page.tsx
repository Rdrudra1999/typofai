"use client"
import React, { useState, useEffect, useRef } from 'react';
import PrvHeader from '@/components/PrvHeader';
import PrvFooter from '@/components/PrevFooter';
import PrvBanner from '@/components/PrvBanner';
import BuildNavbar from '@/components/BuildNavbar';
import PrvShortIntro from '@/components/PrvShortIntro';
import PrvFeatureItem from '@/components/PrvFeatureItem';
import PrvCategory from '@/components/PrvCategory';
import PrevNewsLetter from '@/components/PrevNewsLetter';

interface PrvHeaderProps {
  businessName: string;
}

const PrvDemoWeb = () => {
  const [businessName, setBusinessName] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Generating a beautiful website...');
  const loadingSteps = [
    'Generating Banner...',
    'Generating Short Intro...',
    'Generating Feature Item...',
    'Generating Category...',
    'Generating News Letter...',
    'Generating Footer...',
  ];
  const [stepIndex, setStepIndex] = useState(0);
  const [websiteReady, setWebsiteReady] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prevIndex) => (prevIndex + 1) % loadingSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      setLoadingText('Loading Complete');
      setTimeout(() => {
        setWebsiteReady(true);
      }, 2000); // Delay to show the modal after 2 seconds of loading complete
    } else {
      setLoadingText(loadingSteps[stepIndex]);
    }
  }, [loading, stepIndex]);

  useEffect(() => {
    const businessName = localStorage.getItem('businessName');
    // Use the businessName value as needed
    console.log(`businessName: ${businessName}`);
    setBusinessName(businessName || ''); // Use an empty string if businessName is null
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <>
      {loading ? (
        // Loading state
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          {/* Display loading message here */}
          <button className='btn btn-primary'>
            <span className='loading loading-spinner'></span>
            {loadingText}
          </button>
        </div>
      ) : (
        // Website content
        <>
          <div className='max-w-[110rem] mx-auto'>
            <BuildNavbar />
          </div>
          <div className='max-w-[90rem] mx-auto'>
            <PrvHeader businessName={businessName} />
            <PrvBanner />
            <PrvShortIntro />

            <PrvCategory />
            <PrvFeatureItem />
            <PrevNewsLetter />
            <PrvFooter businessName={businessName} />
          </div>
        </>
      )}

      {/* Modal */}
      {websiteReady && showModal && (
        <>
          <div
            ref={modalRef}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.50)',
              zIndex: 9998,
            }}
            onClick={handleOverlayClick}
          ></div>
          <div
            className='flex flex-col items-center justify-center'
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.50)',
              zIndex: 9999,
            }}
          >
            <h3 className='text-3xl tracking-wide text-center'>Your website is ready!</h3>
            <p className='pt-3 pb-3 text-xl text-center'>Thank you for waiting.</p>
            <button className='max-w-sm text-center btn btn-primary' onClick={closeModal}>
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PrvDemoWeb;
