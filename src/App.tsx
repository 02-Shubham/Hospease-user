import React, { useState } from 'react';
import { Calendar, Clock, Building2 as Hospital, FileText, AlertCircle, Menu, X, Search, ArrowRight, Users, Clock3, Stethoscope, Download } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const features = [
    { id: 'home', icon: Hospital, label: 'Home' },
    { id: 'appointments', icon: Calendar, label: 'Appointments' },
    { id: 'records', icon: FileText, label: 'Medical Records' },
  ];

  const hospitals = [
    { name: 'Central Hospital', beds: 15, distance: '2.5 km' },
    { name: 'City Medical Center', beds: 8, distance: '4.1 km' },
    { name: "St. John's Hospital", beds: 23, distance: '5.7 km' },
  ];

  const appointments = [
    { time: '09:00 AM', doctor: 'Dr. Sarah Wilson', dept: 'Cardiology' },
    { time: '11:30 AM', doctor: 'Dr. Michael Chen', dept: 'Neurology' },
    { time: '02:15 PM', doctor: 'Dr. Emily Brooks', dept: 'Pediatrics' },
  ];

  const searchData = {
    hospitals: [
      { name: 'Central Hospital', type: 'General Hospital' },
      { name: 'City Medical Center', type: 'Multispecialty' },
      { name: "St. John's Hospital", type: 'General Hospital' },
      { name: 'Metro Healthcare', type: 'Specialty Center' },
      { name: 'Valley General Hospital', type: 'General Hospital' },
      { name: 'Hope Medical Institute', type: 'Research Hospital' },
      { name: 'Sunrise Hospital', type: 'Children Hospital' },
      { name: 'Unity Medical Center', type: 'Multispecialty' },
      { name: 'Grace Hospital', type: 'Women Hospital' },
      { name: 'Life Care Center', type: 'Emergency Center' }
    ],
    doctors: [
      { name: 'Dr. Sarah Wilson', speciality: 'Cardiology' },
      { name: 'Dr. Michael Chen', speciality: 'Neurology' },
      { name: 'Dr. Emily Brooks', speciality: 'Pediatrics' },
      { name: 'Dr. James Miller', speciality: 'Orthopedics' },
      { name: 'Dr. Lisa Wang', speciality: 'Dermatology' },
      { name: 'Dr. Robert Smith', speciality: 'Internal Medicine' },
      { name: 'Dr. Maria Garcia', speciality: 'Gynecology' },
      { name: 'Dr. David Kim', speciality: 'Psychiatry' },
      { name: 'Dr. Rachel Green', speciality: 'Oncology' },
      { name: 'Dr. John Davis', speciality: 'Emergency Medicine' }
    ]
  };

  const medicalRecords = [
    {
      id: 1,
      date: '2024-03-15',
      type: 'Lab Report',
      doctor: 'Dr. Sarah Wilson',
      department: 'Cardiology',
      description: 'Annual blood work results',
      status: 'Complete'
    },
    {
      id: 2,
      date: '2024-02-28',
      type: 'Prescription',
      doctor: 'Dr. Michael Chen',
      department: 'Neurology',
      description: 'Monthly medication renewal',
      status: 'Active'
    },
    {
      id: 3,
      date: '2024-01-10',
      type: 'Imaging',
      doctor: 'Dr. Emily Brooks',
      department: 'Radiology',
      description: 'Chest X-ray results',
      status: 'Complete'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Patients', value: '10,000+' },
    { icon: Hospital, label: 'Partner Hospitals', value: '50+' },
    { icon: Clock3, label: 'Average Wait Time', value: '15 mins' },
    { icon: Stethoscope, label: 'Specialist Doctors', value: '200+' },
  ];

  const filteredResults = searchQuery.length > 2 ? {
    hospitals: searchData.hospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    doctors: searchData.doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.speciality.toLowerCase().includes(searchQuery.toLowerCase())
    )
  } : { hospitals: [], doctors: [] };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(e.target.value.length > 2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Hospital className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Hospease</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search hospitals, doctors..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={handleSearch}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                  onFocus={() => setShowSearchResults(searchQuery.length > 2)}
                />
                {showSearchResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                    {filteredResults.hospitals.length > 0 && (
                      <div className="p-2">
                        <h3 className="text-sm font-semibold text-gray-500 px-3 py-2">Hospitals</h3>
                        {filteredResults.hospitals.map((hospital) => (
                          <button
                            key={hospital.name}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium text-gray-900">{hospital.name}</div>
                            <div className="text-sm text-gray-500">{hospital.type}</div>
                          </button>
                        ))}
                      </div>
                    )}
                    {filteredResults.doctors.length > 0 && (
                      <div className="p-2 border-t">
                        <h3 className="text-sm font-semibold text-gray-500 px-3 py-2">Doctors</h3>
                        {filteredResults.doctors.map((doctor) => (
                          <button
                            key={doctor.name}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium text-gray-900">{doctor.name}</div>
                            <div className="text-sm text-gray-500">{doctor.speciality}</div>
                          </button>
                        ))}
                      </div>
                    )}
                    {filteredResults.hospitals.length === 0 && filteredResults.doctors.length === 0 && (
                      <div className="p-4 text-center text-gray-500">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab('emergency')}
                className="hidden md:flex items-center space-x-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <AlertCircle className="h-5 w-5" />
                <span>Emergency</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
              <nav className="hidden md:flex items-center space-x-6">
                {features.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`${
                      activeTab === id
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-2">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search hospitals, doctors..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchQuery}
                onChange={handleSearch}
              />
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                  {/* Same search results content as desktop */}
                  {filteredResults.hospitals.length > 0 && (
                    <div className="p-2">
                      <h3 className="text-sm font-semibold text-gray-500 px-3 py-2">Hospitals</h3>
                      {filteredResults.hospitals.map((hospital) => (
                        <button
                          key={hospital.name}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md"
                        >
                          <div className="font-medium text-gray-900">{hospital.name}</div>
                          <div className="text-sm text-gray-500">{hospital.type}</div>
                        </button>
                      ))}
                    </div>
                  )}
                  {filteredResults.doctors.length > 0 && (
                    <div className="p-2 border-t">
                      <h3 className="text-sm font-semibold text-gray-500 px-3 py-2">Doctors</h3>
                      {filteredResults.doctors.map((doctor) => (
                        <button
                          key={doctor.name}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md"
                        >
                          <div className="font-medium text-gray-900">{doctor.name}</div>
                          <div className="text-sm text-gray-500">{doctor.speciality}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <nav className="space-y-1">
              <button
                onClick={() => {
                  setActiveTab('emergency');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg mb-2"
              >
                <AlertCircle className="h-5 w-5" />
                <span>Emergency</span>
              </button>
              {features.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 ${
                    activeTab === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {activeTab === 'home' && (
          <div 
            className="min-h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(255, 255, 255, 0.4)'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] space-y-12">
                {/* Hero Section */}
                <div className="text-center space-y-8 max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                    Healthcare Management
                    <span className="text-blue-600"> Simplified</span>
                  </h1>
                  <p className="text-xl text-gray-700">
                    Hospease streamlines healthcare access and resource optimization,
                    enhancing patient care and hospital efficiency through smart
                    technology solutions.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 text-lg">
                      <span>Book Appointment</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                  {stats.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:bg-white/90 transition-colors"
                    >
                      <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'emergency' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-red-700 mb-2">
                <AlertCircle className="h-5 w-5" />
                <h2 className="font-semibold">Emergency Services</h2>
              </div>
              <p className="text-red-600">
                Find hospitals with available beds near you
              </p>
            </div>

            <div className="space-y-4">
              {hospitals.map((hospital) => (
                <div
                  key={hospital.name}
                  className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {hospital.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {hospital.distance} away
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-medium">
                        {hospital.beds} beds available
                      </p>
                      <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div
                    key={apt.time}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">{apt.doctor}</p>
                        <p className="text-sm text-gray-500">{apt.dept}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600">{apt.time}</p>
                      <button className="text-sm text-gray-500 hover:text-red-600">
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Book New Appointment
              </button>
            </div>
          </div>
        )}

        {activeTab === 'records' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Medical Records</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                  <Download className="h-4 w-4" />
                  <span>Download All</span>
                </button>
              </div>
              <div className="space-y-4">
                {medicalRecords.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <h3 className="font-medium text-gray-900">{record.type}</h3>
                          <p className="text-sm text-gray-500">{record.description}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                        <span>{record.date}</span>
                        <span>•</span>
                        <span>{record.doctor}</span>
                        <span>•</span>
                        <span>{record.department}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        record.status === 'Complete' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {record.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;