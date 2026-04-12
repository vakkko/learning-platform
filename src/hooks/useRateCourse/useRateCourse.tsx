import axios from "axios";

import { BASE_URL } from "../../consts/consts";

const token = sessionStorage.getItem("token");

const useRateCourse = (
  courseId: string | undefined,
  rating: number | null,
  handleClose: (() => void) | undefined,
) => {
  const handleRateClick = async () => {
    if (rating) {
      try {
        const response = await axios.post(
          `${BASE_URL}/courses/${courseId}/reviews`,
          {
            rating: rating,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (response.status === 201 && handleClose) {
          handleClose();
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return handleRateClick;
};

export default useRateCourse;
