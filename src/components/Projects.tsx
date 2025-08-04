import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects, fetchCloudinaryImages } from '../data/projects';
import { isCloudinaryConfigured } from '../config/cloudinary';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [galleryImages, setGalleryImages] = useState<Project[]>(projects);
  const [isLoading, setIsLoading] = useState(false);
  const [useCloudinary, setUseCloudinary] = useState(false);

  // Check if Cloudinary is configured on component mount
  useEffect(() => {
    const cloudinaryConfigured = isCloudinaryConfigured();
    setUseCloudinary(cloudinaryConfigured);
    
    if (cloudinaryConfigured) {
      loadCloudinaryImages();
    }
  }, []);

  const loadCloudinaryImages = async () => {
    setIsLoading(true);
    try {
      const cloudinaryImages = await fetchCloudinaryImages();
      if (cloudinaryImages.length > 0) {
        setGalleryImages(cloudinaryImages);
        console.log('✅ Cloudinary images loaded successfully');
      } else {
        console.log('⚠️ No Cloudinary images found, using local images');
        setGalleryImages(projects);
      }
    } catch (error) {
      console.error('❌ Error loading Cloudinary images:', error);
      setGalleryImages(projects);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (project: Project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const nextImage = () => {
    if (!currentProject) return;
    
    const images = [currentProject.image];
    if (currentProject.beforeImage) images.push(currentProject.beforeImage);
    if (currentProject.afterImage) images.push(currentProject.afterImage);
    
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!currentProject) return;
    
    const images = [currentProject.image];
    if (currentProject.beforeImage) images.push(currentProject.beforeImage);
    if (currentProject.afterImage) images.push(currentProject.afterImage);
    
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCurrentImage = () => {
    if (!currentProject) return '';
    
    const images = [currentProject.image];
    if (currentProject.beforeImage) images.push(currentProject.beforeImage);
    if (currentProject.afterImage) images.push(currentProject.afterImage);
    
    return images[currentImageIndex];
  };

  const getImageLabel = () => {
    if (!currentProject) return '';
    
    const images = [currentProject.image];
    if (currentProject.beforeImage) images.push(currentProject.beforeImage);
    if (currentProject.afterImage) images.push(currentProject.afterImage);
    
    if (images.length === 1) return '';
    if (currentImageIndex === 0) return 'Main';
    if (currentImageIndex === 1 && currentProject.beforeImage) return 'Before';
    if (currentImageIndex === 2 && currentProject.afterImage) return 'After';
    return `Image ${currentImageIndex + 1}`;
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Recent Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise in welding, fabrication, and engineering solutions across various industries
          </p>
        </div>

        {/* Cloudinary Status Indicator (only show if configured) */}
        {isCloudinaryConfigured() && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2">
              <div className={`w-3 h-3 rounded-full ${useCloudinary ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
              <span className="text-gray-300 text-sm">
                {useCloudinary ? '🔄 Live Gallery (Cloudinary)' : '📁 Local Gallery'}
              </span>
              {isLoading && (
                <div className="ml-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-400"></div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image count indicator for multi-image projects */}
                {(project.beforeImage || project.afterImage) && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {[project.image, project.beforeImage, project.afterImage].filter(Boolean).length} photos
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-400 text-sm font-semibold">{project.category}</span>
                  <span className="text-gray-400 text-sm">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                
                {/* Cloudinary upload date (if available) */}
                {project.uploadedAt && (
                  <div className="mt-3 text-xs text-gray-500">
                    Added: {new Date(project.uploadedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for Cloudinary */}
        {useCloudinary && galleryImages.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 max-w-md mx-auto">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Images Yet</h3>
              <p className="text-gray-400 mb-4">
                Images will appear here once uploaded to your Cloudinary gallery folder.
              </p>
              <button
                onClick={loadCloudinaryImages}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Refresh Gallery
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative">
              <img
                src={getCurrentImage()}
                alt={currentProject.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image navigation */}
              {([currentProject.image, currentProject.beforeImage, currentProject.afterImage].filter(Boolean).length > 1) && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Image label */}
              {getImageLabel() && (
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {getImageLabel()}
                </div>
              )}
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
              <p className="text-gray-300">{currentProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;