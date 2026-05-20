import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('biometric');
  const [name, setName] = useState('Bambani Logistics');
  const [jobs, setJobs] = useState(12);
  const [job, setJob] = useState({ vehicle: 'Mahindra Mining Spec', time: '' });
  const [payStatus, setPayStatus] = useState('idle');

  // 1. BIOMETRIC LOGIN
  if (view === 'biometric') return (
    <div style={{background: '#002147', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '20px', fontFamily: 'sans-serif'}}>
      <div style={{width: 100, height: 100, borderRadius: '50%', border: '4px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
        <span style={{fontSize: 40}}>🤝</span>
      </div>
      <h1 style={{color: '#D4AF37', textAlign: 'center', margin: 0}}>{name}</h1>
      <p style={{color: '#888', marginBottom: 30}}>FLEET DISPATCH PLATFORM</p>
      <button onClick={() => setView('login')} style={{padding: '15px 40px', borderRadius: 30, border: '2px solid #D4AF37', background: 'transparent', color: '#D4AF37', fontWeight: 'bold', cursor: 'pointer'}}>SECURE LOGIN</button>
    </div>
  );

  // 2. MAIN HUB
  if (view === 'login') return (
    <div style={{background: '#f4f4f4', minHeight: '100vh', padding: 20, fontFamily: 'sans-serif'}}>
      <h2 style={{color: '#002147'}}>{name}</h2>
      <button onClick={() => {setJob({vehicle:'Mahindra Mining Spec', time: new Date().toLocaleTimeString()}); setView('hotshot');}} style={{display:'block', width:'100%', padding:20, margin:'10px 0', background:'#D4AF37', color:'#002147', border:0, borderRadius:15, fontWeight:'bold'}}>Hot Shot Dispatch</button>
      <button onClick={() => setView('pay')} style={{display:'block', width:'100%', padding:20, margin:'10px 0', background:'white', color:'#002147', border:0, borderRadius:15, fontWeight:'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>Billing & Payments</button>
      <button onClick={() => setView('biometric')} style={{marginTop: 20, color: '#666', border: 0, background: 'none'}}>Logout</button>
    </div>
  );

  // 3. DISPATCH & STAMPED WAYBILL
  if (view === 'hotshot') return (
    <div style={{padding: 20, background: 'white', minHeight: '100vh', color: '#002147', fontFamily: 'sans-serif'}}>
      <h2>Digital Waybill</h2>
      <div style={{padding: 30, border: '2px dashed #002147', borderRadius: 20, position: 'relative', marginTop: 20}}>
        <p><strong>Asset:</strong> {job.vehicle}</p>
        <p><strong>Time:</strong> {job.time}</p>
        <div style={{position: 'absolute', right: 10, bottom: 10, border: '2px solid #002147', padding: '5px 10px', transform: 'rotate(-20deg)', fontWeight: 'bold', opacity: 0.4}}>{name.toUpperCase()}</div>
      </div>
      <button onClick={() => {setJobs(jobs+1); setView('login')}} style={{marginTop: 30, width:'100%', padding:20, background:'#002147', color:'white', borderRadius:15, fontWeight:'bold'}}>Finalize Dispatch</button>
    </div>
  );

  // 4. BILLING & PRINTABLE RECEIPT
  if (view === 'pay') return (
    <div style={{padding: 20, background: '#f4f4f4', minHeight: '100vh', color: '#002147', fontFamily: 'sans-serif'}}>
      <h2 style={{borderBottom: '2px solid #002147', paddingBottom: 10}}>Billing & Payments</h2>
      <div style={{background: 'white', padding: 20, borderRadius: 15, margin: '20px 0'}}>
        <p>Monthly Subscription</p>
        <h1 style={{fontSize: 40}}>R 1,500</h1>
      </div>
      
      {payStatus === 'idle' ? (
        <button onClick={() => setPayStatus('confirmed')} style={{width:'100%', padding:20, background:'#002147', color:'white', borderRadius:15, fontSize:18, fontWeight:'bold'}}>PAY NOW</button>
      ) : (
        <div style={{background: '#dcfce7', padding: 20, borderRadius: 15, textAlign: 'center'}}>
          <p style={{color: '#166534', fontWeight: 'bold'}}>Payment Confirmed!</p>
          <button onClick={() => { window.print(); setView('login'); setPayStatus('idle'); }} style={{marginTop: 10, width: '100%', padding: 15, background: '#166534', color: 'white', borderRadius: 10, fontWeight: 'bold'}}>PRINT OFFICIAL RECEIPT</button>
        </div>
      )}
      
      <button onClick={() => setView('login')} style={{marginTop: 10, width: '100%', padding: 10, background: 'none', border: '1px solid #002147', borderRadius: 10}}>Back</button>
    </div>
  );

  return <div />;
}
