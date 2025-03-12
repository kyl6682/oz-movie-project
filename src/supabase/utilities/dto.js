import { DTO_TYPE } from "./config";

// User data 매핑용 함수
export const changeFromDto = ({ type, dto }) => {
  switch (type) {
    case DTO_TYPE.user: {
      const userInfo = dto?.user?.user_metadata || {};
      return {
        user: {
          id: userInfo.sub,
          email: userInfo.email,
          userName: userInfo.userName
            ? userInfo.userName
            : userInfo.email.split("@")[0],
          profileImageUrl: userInfo.avatar_url,
        },
      };
    }
    case DTO_TYPE.error: {
      const rawError = dto?.error || {};

      return {
        error: {
          status: rawError.status || 500,
          message:
            rawError.message ||
            "DTO_TYPE ERROR를 확인해주세요. 데이터 내부 error 객체가 없습니다.",
        },
      };
    }
    default:
      throw new Error("wrong type accessed");
  }
};
