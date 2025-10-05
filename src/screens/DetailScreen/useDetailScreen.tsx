import { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";
import { useAppNavigation, useAppRoute } from "../../hooks/navigation";

const useDetailScreen = () => {
  const { params } = useAppRoute();
  const navigate = useAppNavigation();

  const [aspectRatio, setAspectRatio] = useState(1);

  const screenWidth = Dimensions.get("window").width - 30;

  useEffect(() => {
    if (params?.primaryImage?.url) {
      Image.getSize(
        params.primaryImage.url,
        (width, height) => {
          if (width && height) {
            setAspectRatio(width / height);
          }
        },
        (error) => {
          console.warn("Failed to get image size:", error);
        }
      );
    }
  }, [params?.primaryImage?.url]);

  return { params, navigate, screenWidth, aspectRatio };
};

export default useDetailScreen;
