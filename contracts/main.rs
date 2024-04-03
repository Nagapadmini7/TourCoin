use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    program_pack::{IsInitialized, Pack},
    pubkey::Pubkey,
    sysvar::{rent::Rent, Sysvar},
};


pub struct Passport {
    pub passport_number: String,
    pub expiration_date: u64,
    pub issuing_country: String,
    pub verified: bool,
}


impl IsInitialized for Passport {
    fn is_initialized(&self) -> bool {
        true
    }
}

//entrypoint
#[entrypoint]
pub fn register_passport(
    accounts: &[AccountInfo],
    passport_number: String,
    expiration_date: u64,
    issuing_country: String,
) -> ProgramResult {
    // Get the accounts required for the transaction
    let accounts_iter = &mut accounts.iter();
    let user_account = next_account_info(accounts_iter)?;

    // Check if the user account is owned by the program
    if !user_account.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    // Create a new Passport struct
    let passport = Passport {
        passport_number,
        expiration_date,
        issuing_country,
        verified: false,
    };

  
    Passport::pack(passport, &mut user_account.data.borrow_mut())?;

    // Emit event for passport registration
    emit_event("Passport registered successfully");

    Ok(())
}

#[entrypoint]
pub fn verify_passport(
    accounts: &[AccountInfo],
    passport_number: String,
    expiration_date: u64,
    issuing_country: String,
) -> ProgramResult {
    // Get the accounts required for the transaction
    let accounts_iter = &mut accounts.iter();
    let user_account = next_account_info(accounts_iter)?;

    // Check if the user account is owned by the program
    if !user_account.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    
    let mut passport_data = user_account.data.borrow_mut();
    let mut passport = Passport::unpack_unchecked(&mut passport_data)?;


    let verified = verify_passport_external(&passport_number, expiration_date, &issuing_country);

 
    passport.verified = verified;
    Passport::pack(passport, &mut passport_data)?;


    if verified {
        emit_event("Passport verified successfully");

        // Create Phantom wallet if passport is verified
        create_phantom_wallet(user_account)?;
    } else {
        emit_event("Passport verification failed");
    }

    Ok(())
}

// Function to verify passport using an external verification service
fn verify_passport_external(
    passport_number: &str,
    expiration_date: u64,
    issuing_country: &str,
) -> bool {
    //API to be integrated
    true
}

// Function to create Phantom wallet
fn create_phantom_wallet(user_account: &AccountInfo) -> ProgramResult {
    // phantom api to be added
    emit_event("Phantom wallet created successfully");
    Ok(())
}

// Solana program entry point
#[cfg(not(feature = "no-entrypoint"))]
pub fn entrypoint(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("Passport verification program entrypoint");

    // Parse the instruction data and dispatch the appropriate function
    Ok(())
}

// Unit tests
#[cfg(test)]
mod tests {
    use super::*;
    use solana_program::clock::Epoch;
    use solana_program::clock::Slot;

    #[test]
    fn test_register_passport() {
        // Define test variables and accounts
        let mut mock_program_id = Pubkey::default();
        let mut mock_accounts = vec![];
        let mut mock_user_account_info = AccountInfo::default();
        mock_user_account_info.is_signer = true;
        mock_user_account_info.key = Pubkey::new_unique();
        mock_accounts.push(mock_user_account_info.clone());

        let passport_number = "ABC123";
        let expiration_date = 123456789;
        let issuing_country = "USA";

        // Call the register_passport function
        let result = register_passport(
            &mock_accounts,
            passport_number.to_string(),
            expiration_date,
            issuing_country.to_string(),
        );
        assert!(result.is_ok());
    }

    #[test]
    fn test_verify_passport() {
        // Define test variables and accounts
        let mut mock_program_id = Pubkey::default();
        let mut mock_accounts = vec![];
        let mut mock_user_account_info = AccountInfo::default();
        mock_user_account_info.is_signer = true;
        mock_user_account_info.key = Pubkey::new_unique();
        mock_accounts.push(mock_user_account_info.clone());

        let passport_number = "ABC123";
        let expiration_date = 123456789;
        let issuing_country = "USA";

        // Call the verify_passport function
        let result = verify_passport(
            &mock_accounts,
            passport_number.to_string(),
            expiration_date,
            issuing_country.to_string(),
        );
        assert!(result.is_ok());
    }
}
