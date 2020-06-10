import Session from './Session';

const SupportHeader = async (extraMetadata) => {
  let header = {};
  const token = await Session.getData('token');
  if (token) {
    header = {
      headers: {
        Authorization: `Bearer ${token}`,
        ...extraMetadata,
      },
    };
  }
  return header;
};

export default SupportHeader;
