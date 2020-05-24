namespace Domain
{
    public class UserFollowing
    {
        //currently logged in user
        public string ObserverId { get; set; }
        public virtual AppUser Observer { get; set; }

        //a user whom want to follow
        public string TargetId { get; set; }
        public virtual AppUser Target { get; set; }
    }
}