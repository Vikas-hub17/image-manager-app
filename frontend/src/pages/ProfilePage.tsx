import React, { useState } from "react";
import {
  Container,
  Form,
  Input,
  Button,
  ProfileImage,
  ProfileSection,
} from "../styles/ProfileStyles";
import toast from "react-hot-toast";

const ProfilePage: React.FC = () => {
  const [name, setName] = useState<string>("John Doe");
  const [email, setEmail] = useState<string>("john.doe@example.com");
  const [profileImage, setProfileImage] = useState<string>("https://via.placeholder.com/150");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Name and Email are required.");
      return;
    }

    try {
      setLoading(true);

      // Simulated API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !newPassword) {
      toast.error("Both fields are required for password change.");
      return;
    }

    if (password === newPassword) {
      toast.error("New password must be different from the current password.");
      return;
    }

    try {
      setLoading(true);

      // Simulated API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Password changed successfully!");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      toast.success("Profile picture updated.");
    }
  };

  return (
    <Container>
      <ProfileSection>
        <h2>Profile Details</h2>
        <ProfileImage src={profileImage} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <Form onSubmit={handleProfileUpdate}>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </Form>

        <h3>Change Password</h3>
        <Form onSubmit={handlePasswordChange}>
          <Input
            type="password"
            placeholder="Current Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Change Password"}
          </Button>
        </Form>
      </ProfileSection>
    </Container>
  );
};

export default ProfilePage;
