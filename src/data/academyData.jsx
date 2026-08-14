// src/data/academyData.jsx
import React from 'react';

export const academyData = [
  {
    id: 'full-stack',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Advanced Full-Stack Engineering',
    shortDescription: 'Master modern web architecture, from reactive front-ends to scalable backend databases.',
    fullDescription: 'An intensive, production-focused track designed to bridge the gap between basic coding and enterprise-grade software development. Learn to architect, deploy, and maintain scalable applications.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'React & Modern Frontend Architecture',
      'Node.js & Express API Development',
      'PostgreSQL & Database Schema Design',
      'System Architecture & Microservices'
    ]
  },
  {
    id: 'cloud-devops',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud Infrastructure & DevOps',
    shortDescription: 'Learn to deploy, manage, and scale enterprise applications using industry-standard cloud tools.',
    fullDescription: 'Master the lifecycle of software deployment. This track focuses on automating CI/CD pipelines, containerization, and provisioning resilient cloud infrastructure that handles high traffic with zero downtime.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'AWS Infrastructure & Provisioning',
      'Docker Containerization',
      'Kubernetes Orchestration',
      'Automated CI/CD Pipelines'
    ]
  },
  {
    id: 'cybersecurity',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Enterprise Cybersecurity',
    shortDescription: 'Defend systems against modern threats with hands-on security operations and penetration testing.',
    fullDescription: 'Move beyond theory and engage in live-fire security scenarios. This curriculum teaches threat modeling, secure code auditing, and compliance standards necessary to protect enterprise SaaS environments.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Network Threat Modeling',
      'Penetration Testing (Ethical Hacking)',
      'Secure Application Auditing',
      'ISO/Compliance Frameworks'
    ]
  },
  {
    id: 'ai-machine-learning',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    shortDescription: 'Design and deploy intelligent systems using deep learning and neural networks.',
    fullDescription: 'Dive into the world of artificial intelligence. This track covers data preprocessing, model training, and deploying scalable ML pipelines in production environments to solve real-world problems.',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Python for Data Science',
      'TensorFlow & PyTorch',
      'NLP & Computer Vision',
      'MLOps & Model Deployment'
    ]
  },
  {
    id: 'mobile-engineering',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Engineering',
    shortDescription: 'Build high-performance, cross-platform mobile applications for iOS and Android.',
    fullDescription: 'Learn the intricacies of modern mobile development. This track teaches you how to build fluid, native-feeling applications, manage complex state, and integrate smoothly with device hardware APIs.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'React Native & Expo Ecosystem',
      'iOS & Android Native Modules',
      'Mobile State Management',
      'App Store Deployment Strategies'
    ]
  },
  {
    id: 'data-engineering',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Data Engineering',
    shortDescription: 'Architect robust data pipelines and scalable enterprise data warehouses.',
    fullDescription: 'Master the flow of information. From complex ETL processes to distributed computing, learn to build the critical infrastructure that powers enterprise analytics and business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'ETL Pipeline Construction',
      'Apache Spark & Kafka',
      'Data Warehousing (Snowflake)',
      'Big Data Architecture'
    ]
  }
];