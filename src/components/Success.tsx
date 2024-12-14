import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SuccessPage() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [platform, setPlatform] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const userInfoParam = searchParams.get('userInfo');
    const platformParam = searchParams.get('platform');
    const errorParam = searchParams.get('message');

    if (errorParam) {
      setError(errorParam);
      return;
    }

    if (userInfoParam && platformParam) {
      setPlatform(platformParam);
      setUserInfo(JSON.parse(decodeURIComponent(userInfoParam)));
    }
  }, [searchParams]);

  if (error) {
    return <div>登录失败：{error}</div>;
  }

  if (!userInfo) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      <h1>{platform === 'github' ? 'GitHub' : '微信'} 登录成功</h1>
      <img src={platform === 'github' ? userInfo.avatar_url : userInfo.faceimg} alt="头像" />
      <h2>昵称：{platform === 'github' ? userInfo.name : userInfo.nickname}</h2>
      {platform === 'github' && <p>简介：{userInfo.bio || '暂无'}</p>}
    </div>
  );
}
