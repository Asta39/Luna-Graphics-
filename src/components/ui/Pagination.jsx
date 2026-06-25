import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <div className="flex items-center gap-2">
        {/* Previous */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-emerald-600 hover:text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Icon name="ChevronLeft" size={20} />
        </motion.button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, idx) => (
          <React.Fragment key={idx}>
            {page === '...' ? (
              <span className="px-2 text-gray-400">...</span>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 rounded-full font-medium transition-all ${
                  currentPage === page
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'border border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600'
                }`}
              >
                {page}
              </motion.button>
            )}
          </React.Fragment>
        ))}

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-emerald-600 hover:text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Icon name="ChevronRight" size={20} />
        </motion.button>
      </div>

      <p className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;